process.env["NODE_CONFIG_DIR"] = "../../config";

const AGIServer = require('ding-dong'),
    config = require('./config'),
    flow = require('./flow'),
    path = require('path'),
    omni = require('../../helpers/omni'),
    df = require('../../helpers/df'),
    winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [new winston.transports.File({ filename: `${config.id}.log` })]
});

const handler = async (context) => {
    let variables = await context.onEvent('variables');
    variables['agi_channel'] = variables['agi_channel'].substr(4);
    logger.add(new winston.transports.File({filename: `./logs/${variables['agi_callerid']}.log`}));
    omni.add(variables['agi_channel'], variables['agi_callerid'], 'started');

    console.log();
    const w = await context.exec('WAIT', 1);
    const sd = await df.send('hola', 'step-one', variables['agi_channel'], config.projectId);
    const p = await context.exec('PLAYBACK', path.resolve(`../../audios/${flow.audios[0]['name']}`));
    const rec = await context.exec(
        path.resolve(`./records/56${variables['agi_callerid']}_record_1`), 'wav', 0, config.seconds);

    //------------------- Step One -------------------//
    const audio = await df.audio(path.resolve(`./records/56${variables['agi_callerid']}_record_1`),
        'step-one', variables['agi_channel'], config.projectId);
    omni.add(variables['agi_channel'], variables['agi_callerid'], 's1');
};

const ripley = new AGIServer(handler, {debug: true});
ripley.start(3000);
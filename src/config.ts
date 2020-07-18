type Config = {
	host: string;
	i: string;
	wsUrl: string;
	apiUrl: string;
	keywordEnabled: boolean;
	keywordInterval?: number;
	reversiEnabled: boolean;
	chartEnabled: boolean;
    welcomeEnabled: boolean;
	serverMonitoring: boolean;
	mazeAutoPostEnabled: boolean;
	mecab?: string;
	mecabDic?: string;
};

const config = require('../config.json');

config.wsUrl = config.host.replace('http', 'ws');
config.apiUrl = config.host + '/api';

export default config as Config;

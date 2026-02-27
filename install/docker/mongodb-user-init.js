const env = (typeof process !== 'undefined' && process.env) ? process.env : {};

const appDb = env.MONGO_INITDB_DATABASE || 'nodebb';
const appUser = env.MONGO_INITDB_ROOT_USERNAME || 'nodebb';
const appPassword = env.MONGO_INITDB_ROOT_PASSWORD || 'nodebb';

db = db.getSiblingDB(appDb);
db.createUser({
	user: appUser,
	pwd: appPassword,
	roles: [
		{ role: 'readWrite', db: appDb },
		{ role: 'clusterMonitor', db: 'admin' },
	],
});
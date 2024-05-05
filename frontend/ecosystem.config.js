const dotenv = require('dotenv');
dotenv.config({ path: './.env.deploy' });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF, DEPLOY_REP,
} = process.env;

module.exports = {
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REP,
      path: DEPLOY_PATH,
      "post-deploy": `cd ~/web-plus-pm2-deploy-frontend/current/frontend/ && source ~/.nvm/nvm.sh && nvm use 20.12.2 && npm i && npm run build`,
    },
  },
}

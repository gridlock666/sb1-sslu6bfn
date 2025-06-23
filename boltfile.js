// boltfile.js
import bolt from 'bolt-cli'
import { execSync } from 'child_process'

/* ───────── VPS-specific settings ───────── */
const SSH       = 'mkex@mkex.news';     // SSH user & host
const APP_DIR   = '/home/mkex/htdocs';  // absolute app folder
const START_CMD = 'pm2 reload nutria';  // restart command
/* ───────────────────────────────────────── */

/* Runtime secrets and public constants */
const ENV = {
  DATABASE_URL         : 'postgresql://nutriadbuser:LNAFUyEjXU1e5PnzkqQI@localhost:5432/nutriaidb',
  NEXTAUTH_URL         : 'https://mkex.news',
  NEXTAUTH_SECRET      : 'NutriAI2025SecretKey123456789',
  NODE_ENV             : 'production',
  PAYPAL_CLIENT_ID     : 'your_paypal_client_id',
  PAYPAL_CLIENT_SECRET : 'your_paypal_client_secret',
  PAYPAL_ENVIRONMENT   : 'sandbox',
  PAYPAL_WEBHOOK_ID    : 'your_webhook_id',
  NEXT_PUBLIC_BASE_URL : 'https://mkex.news',
  NEXT_PUBLIC_API_URL  : 'https://mkex.news/api',
  AMAZON_AFFILIATE_TAG : 'gardenfrontie-20'
};

/* Helper that forwards env-vars while executing a command */
function run(cmd) {
  execSync(cmd, { stdio: 'inherit', env: { ...process.env, ...ENV } });
}

/*━━━━━━━━  LOCAL BUILD  ━━━━━━━━*/
bolt.task('deps',  () => run('npm ci'));
bolt.task('build', () => run('npm run build'));
bolt.task('lint',  () => run('npm run lint'));

/*━━━━━━━━  UPLOAD CODE  ━━━━━━━━*/
bolt.task('upload', () =>
  run(`tar --exclude=node_modules -czf - . | ssh ${SSH} "mkdir -p ${APP_DIR} && tar xzf - -C ${APP_DIR}"`)
);

/*━━━━━━━━  WRITE .env ON VPS  ━━━━━━━━*/
bolt.task('env', () => {
  const lines = Object.entries(ENV)
                      .map(([k, v]) => \`\${k}=\${v}\`)
                      .join('\\n');
  run(\`echo "${lines}" | ssh ${SSH} "cat > ${APP_DIR}/.env"\`);
});

/*━━━━━━━━  DB MIGRATIONS (Prisma)  ━━━━━━━━*/
bolt.task('migrate',
  () => run(\`ssh ${SSH} "cd ${APP_DIR} && npx prisma migrate deploy"\`));

/*━━━━━━━━  RESTART SERVICE  ━━━━━━━━*/
bolt.task('restart',
  () => run(\`ssh ${SSH} "${START_CMD}"\`));

/*━━━━━━━━  ONE-SHOT DEPLOY  ━━━━━━━━*/
bolt.task('deploy', [
  'deps',
  'build',
  'lint',
  'upload',
  'env',
  'migrate',
  'restart'
]);

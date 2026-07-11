const { spawn } = require('child_process');
const fs = require('fs');
const child = spawn('npx.cmd', ['vitepress', 'build', 'docs'], { shell: true, stdio: 'pipe' });
child.stderr.pipe(fs.createWriteStream('err.log'));
child.stdout.pipe(fs.createWriteStream('out.log'));
child.on('close', (code) => {
    console.log('Exited with', code);
});

const fs = require('fs');
const writeFile = fs.writeFile;

const targetPath = './src/environments/environment.ts';

const envConfigFile = `
export const environment = {
  production: true,
  apiKey: '${process.env.TMDB_API_KEY}',
  apiUrl: 'api.themoviedb.org',
  token: '${process.env.TMDB_TOKEN}'
};
`;

writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log(err);
  }
  console.log(`Файл environment.ts успешно сгенерирован в ${targetPath}`);
});

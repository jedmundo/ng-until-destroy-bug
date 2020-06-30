import { sync } from 'glob';
import { createJsonFile } from './utils/create-json-file';

export const generatedMocksPath = 'build/mocking/mocks';

export const generateMocks = () => {
  const mocks = sync(`${__dirname}/**/*.mock.*s`).map((file) => {
    const match = file.match(/(.*)\/(.*)\./);
    const name = (match && match[2]) || '';
    return {
      fileName: name,
      mockData: require(file).default,
    };
  });

  mocks.forEach((mockFile) => {
    createJsonFile(mockFile.fileName, generatedMocksPath, mockFile.mockData);
  });

  console.log(`Mockdata JSON files saved in '${generatedMocksPath}'.`);
};

console.log(`  ======================================================`);
console.log(`    Mockdata JSON files saved in 'build/mocking/mocks'.`);
console.log(`  ======================================================\n`);

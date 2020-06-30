import { ensureFileSync, writeJsonSync } from 'fs-extra';
import { join } from 'path';
import { NgApimock } from '../ng-apimock.model';

export function createJsonFile(fileName: string, path: string, data: NgApimock): void {
  const filePath = `${join(process.cwd(), path)}/${fileName}.json`;
  ensureFileSync(filePath);
  writeJsonSync(filePath, data, { spaces: 2 });
}

import type { ProjectNameAndRootFormat } from '@nx/devkit/src/generators/project-name-and-root-utils';
import type { Linter } from '@nx/linter';
import type { SupportedStyles } from '../../../typings/style';

export interface Schema {
  appProject?: string;
  bundler?: 'none' | 'vite';
  component?: boolean;
  directory?: string;
  projectNameAndRootFormat?: ProjectNameAndRootFormat;
  importPath?: string;
  inSourceTests?: boolean;
  js?: boolean;
  linter: Linter;
  name: string;
  pascalCaseFiles?: boolean;
  publishable?: boolean;
  routing?: boolean;
  setParserOptionsProject?: boolean;
  skipFormat?: boolean;
  skipPackageJson?: boolean;
  skipTsConfig?: boolean;
  strict?: boolean;
  tags?: string;
  unitTestRunner?: 'jest' | 'vitest' | 'none';
  minimal?: boolean;
  e2eTestRunner?: 'cypress' | 'none';
}

export interface NormalizedSchema extends Schema {
  js: boolean;
  name: string;
  linter: Linter;
  fileName: string;
  projectRoot: string;
  routePath: string;
  parsedTags: string[];
  appMain?: string;
  appSourceRoot?: string;
  unitTestRunner?: 'jest' | 'vitest' | 'none';
}

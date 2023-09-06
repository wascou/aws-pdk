// ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".
import { github, GitOptions, IgnoreFileOptions, java, LoggerOptions, Project, ProjectType, ProjenrcJsonOptions, RenovatebotOptions, SampleReadmeProps } from 'projen';

/**
 * JavaProjectOptions
 */
export interface JavaProjectOptions {
  /**
   * The java package to use for the code sample.
   * @default "org.acme"
   * @stability experimental
   */
  readonly sampleJavaPackage?: string;
  /**
   * Include sample code and test if the relevant directories don't exist.
   * @default true
   * @stability experimental
   */
  readonly sample?: boolean;
  /**
   * List of test dependencies for this project.
   * Dependencies use the format: `<groupId>/<artifactId>@<semver>`
   *
   * Additional dependencies can be added via `project.addTestDependency()`.
   * @default []
   * @stability experimental
   * @featured true
   */
  readonly testDeps?: Array<string>;
  /**
   * Options related to projenrc in java.
   * @default - default options
   * @stability experimental
   */
  readonly projenrcJavaOptions?: java.ProjenrcOptions;
  /**
   * Use projenrc in java.
   * This will install `projen` as a java dependency and will add a `synth` task which
   * will compile & execute `main()` from `src/main/java/projenrc.java`.
   * @default true
   * @stability experimental
   */
  readonly projenrcJava?: boolean;
  /**
   * Packaging options.
   * @default - defaults
   * @stability experimental
   */
  readonly packagingOptions?: java.MavenPackagingOptions;
  /**
   * junit options.
   * @default - defaults
   * @stability experimental
   */
  readonly junitOptions?: java.JunitOptions;
  /**
   * Include junit tests.
   * @default true
   * @stability experimental
   */
  readonly junit?: boolean;
  /**
   * Final artifact output directory.
   * @default "dist/java"
   * @stability experimental
   */
  readonly distdir?: string;
  /**
   * List of runtime dependencies for this project.
   * Dependencies use the format: `<groupId>/<artifactId>@<semver>`
   *
   * Additional dependencies can be added via `project.addDependency()`.
   * @default []
   * @stability experimental
   * @featured true
   */
  readonly deps?: Array<string>;
  /**
   * Compile options.
   * @default - defaults
   * @stability experimental
   */
  readonly compileOptions?: java.MavenCompileOptions;
  /**
   * The URL, like the name, is not required.
   * This is a nice gesture for
   * projects users, however, so that they know where the project lives.
   * @default undefined
   * @stability experimental
   * @featured true
   */
  readonly url?: string;
  /**
   * Project packaging format.
   * @default "jar"
   * @stability experimental
   */
  readonly packaging?: string;
  /**
   * Description of a project is always good.
   * Although this should not replace
   * formal documentation, a quick comment to any readers of the POM is always
   * helpful.
   * @default undefined
   * @stability experimental
   * @featured true
   */
  readonly description?: string;
  /**
   * This is the last piece of the naming puzzle.
   * groupId:artifactId denotes a
   * single project but they cannot delineate which incarnation of that project
   * we are talking about. Do we want the junit:junit of 2018 (version 4.12), or
   * of 2007 (version 3.8.2)? In short: code changes, those changes should be
   * versioned, and this element keeps those versions in line. It is also used
   * within an artifact's repository to separate versions from each other.
   * my-project version 1.0 files live in the directory structure
   * $M2_REPO/org/codehaus/mojo/my-project/1.0.
   * @default "0.1.0"
   * @stability experimental
   * @featured true
   */
  readonly version?: string;
  /**
   * This is generally unique amongst an organization or a project.
   * For example,
   * all core Maven artifacts do (well, should) live under the groupId
   * org.apache.maven. Group ID's do not necessarily use the dot notation, for
   * example, the junit project. Note that the dot-notated groupId does not have
   * to correspond to the package structure that the project contains. It is,
   * however, a good practice to follow. When stored within a repository, the
   * group acts much like the Java packaging structure does in an operating
   * system. The dots are replaced by OS specific directory separators (such as
   * '/' in Unix) which becomes a relative directory structure from the base
   * repository. In the example given, the org.codehaus.mojo group lives within
   * the directory $M2_REPO/org/codehaus/mojo.
   * @default "org.acme"
   * @stability experimental
   * @featured true
   */
  readonly groupId?: string;
  /**
   * The artifactId is generally the name that the project is known by.
   * Although
   * the groupId is important, people within the group will rarely mention the
   * groupId in discussion (they are often all be the same ID, such as the
   * MojoHaus project groupId: org.codehaus.mojo). It, along with the groupId,
   * creates a key that separates this project from every other project in the
   * world (at least, it should :) ). Along with the groupId, the artifactId
   * fully defines the artifact's living quarters within the repository. In the
   * case of the above project, my-project lives in
   * $M2_REPO/org/codehaus/mojo/my-project.
   * @default "my-app"
   * @stability experimental
   * @featured true
   */
  readonly artifactId?: string;
  /**
   * Enable VSCode integration.
   * Enabled by default for root projects. Disabled for non-root projects.
   * @default true
   * @stability experimental
   */
  readonly vscode?: boolean;
  /**
   * Auto-close stale issues and pull requests.
   * To disable set `stale` to `false`.
   * @default - see defaults in `StaleOptions`
   * @stability experimental
   */
  readonly staleOptions?: github.StaleOptions;
  /**
   * Auto-close of stale issues and pull request.
   * See `staleOptions` for options.
   * @default false
   * @stability experimental
   */
  readonly stale?: boolean;
  /**
   * The README setup.
   * @default - { filename: 'README.md', contents: '# replace this' }
   * @stability experimental
   */
  readonly readme?: SampleReadmeProps;
  /**
   * The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.
   * This token needs to have the `repo`, `workflows`
   * and `packages` scope.
   * @default "PROJEN_GITHUB_TOKEN"
   * @deprecated use `projenCredentials`
   * @stability deprecated
   */
  readonly projenTokenSecret?: string;
  /**
   * Choose a method of providing GitHub API access for projen workflows.
   * @default - use a personal access token named PROJEN_GITHUB_TOKEN
   * @stability experimental
   */
  readonly projenCredentials?: github.GithubCredentials;
  /**
   * Which type of project this is (library/app).
   * @default ProjectType.UNKNOWN
   * @deprecated no longer supported at the base project level
   * @stability deprecated
   */
  readonly projectType?: ProjectType;
  /**
   * Options for mergify.
   * @default - default options
   * @deprecated use `githubOptions.mergifyOptions` instead
   * @stability deprecated
   */
  readonly mergifyOptions?: github.MergifyOptions;
  /**
   * Whether mergify should be enabled on this repository or not.
   * @default true
   * @deprecated use `githubOptions.mergify` instead
   * @stability deprecated
   */
  readonly mergify?: boolean;
  /**
   * Add a Gitpod development environment.
   * @default false
   * @stability experimental
   */
  readonly gitpod?: boolean;
  /**
   * Options for GitHub integration.
   * @default - see GitHubOptions
   * @stability experimental
   */
  readonly githubOptions?: github.GitHubOptions;
  /**
   * Enable GitHub integration.
   * Enabled by default for root projects. Disabled for non-root projects.
   * @default true
   * @stability experimental
   */
  readonly github?: boolean;
  /**
   * Add a VSCode development environment (used for GitHub Codespaces).
   * @default false
   * @stability experimental
   */
  readonly devContainer?: boolean;
  /**
   * Add a `clobber` task which resets the repo to origin.
   * @default - true, but false for subprojects
   * @stability experimental
   */
  readonly clobber?: boolean;
  /**
   * Configure options for automatic merging on GitHub.
   * Has no effect if
   * `github.mergify` or `autoMerge` is set to false.
   * @default - see defaults in `AutoMergeOptions`
   * @stability experimental
   */
  readonly autoMergeOptions?: github.AutoMergeOptions;
  /**
   * Enable automatic merging on GitHub.
   * Has no effect if `github.mergify`
   * is set to false.
   * @default true
   * @stability experimental
   */
  readonly autoMerge?: boolean;
  /**
   * Enable and configure the 'auto approve' workflow.
   * @default - auto approve is disabled
   * @stability experimental
   */
  readonly autoApproveOptions?: github.AutoApproveOptions;
  /**
   * Options for renovatebot.
   * @default - default options
   * @stability experimental
   */
  readonly renovatebotOptions?: RenovatebotOptions;
  /**
   * Use renovatebot to handle dependency upgrades.
   * @default false
   * @stability experimental
   */
  readonly renovatebot?: boolean;
  /**
   * Options for .projenrc.json.
   * @default - default options
   * @stability experimental
   */
  readonly projenrcJsonOptions?: ProjenrcJsonOptions;
  /**
   * Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.
   * @default false
   * @stability experimental
   */
  readonly projenrcJson?: boolean;
  /**
   * The shell command to use in order to run the projen CLI.
   * Can be used to customize in special environments.
   * @default "npx projen"
   * @stability experimental
   */
  readonly projenCommand?: string;
  /**
   * The parent project, if this project is part of a bigger project.
   * @stability experimental
   */
  readonly parent?: Project;
  /**
   * The root directory of the project.
   * Relative to this directory, all files are synthesized.
   *
   * If this project has a parent, this directory is relative to the parent
   * directory and it cannot be the same as the parent or any of it's other
   * sub-projects.
   * @default "."
   * @stability experimental
   */
  readonly outdir?: string;
  /**
   * Configure logging options such as verbosity.
   * @default {}
   * @stability experimental
   */
  readonly logging?: LoggerOptions;
  /**
   * Configuration options for git.
   * @stability experimental
   */
  readonly gitOptions?: GitOptions;
  /**
   * Configuration options for .gitignore file.
   * @stability experimental
   */
  readonly gitIgnoreOptions?: IgnoreFileOptions;
  /**
   * Whether to commit the managed files by default.
   * @default true
   * @stability experimental
   */
  readonly commitGenerated?: boolean;
  /**
   * This is the name of your project.
   * @default $BASEDIR
   * @stability experimental
   * @featured true
   */
  readonly name?: string;
}
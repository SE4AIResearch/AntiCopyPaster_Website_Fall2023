export default function Home() {
  return (
    <div className="container">
      <h1 className="center site-title">AntiCopyPaster Plugin</h1>
      <p className="subtitle center">
        Fall 2023 &rarr; Spring 2024 Extensions
      </p>
      <h2 className="title">About</h2>
      <p>
        AntiCopyPaster is
        an <a href="https://www.jetbrains.com/idea/">IntelliJ</a> plugin
        with the goals of improving the development and refactoring experiences,
        as well as reducing code redundancy. Upon detecting a pasted code
        segment, it scans your active file for duplicates and suggests
        refactoring if appropriate.
      </p>
      <h2 className="title">Our Improvements</h2>
      <p>
        We expanded the capabilities of ACP from the type one and partial type
        two extraction support provided by the built-in IntelliJ extractor to
        full detection coverage of type two with almost full extraction coverage.
        This was accomplished through the implementation of a custom extractor
        which functions by traversing the code's abstract syntax tree to look for
        a specific set of code patterns and structures.
      </p>
      <h3 className="title">New Extraction Flow</h3>
      <p>
        After pasting a code segment, if its <a href="#judgement">worthy of
        extraction</a>, a notification will show up.
      </p>
      <img src="/img/notification.png" />
      <p>
        Viewing the recommendation opens an informative prompt.
      </p>
      <img src="/img/prompt.png" />
      <p>
        Accepting the recommendation triggers a series of prompts that ask
        which specific duplicates you would like to extract.
      </p>
      <img src="/img/selection.png" />
      <p>
        And finally a prompt with suggested names will appear to name the newly
        extracted method.
      </p>
      <img src="/img/naming.png" />
      <h3 className="title">Sample - Type One</h3>
      <p>
        The sample below shows an example of an automatic extraction of a type
        1a, 2b, and 1c clone:
      </p>
      <img src="/img/typeOne.png" />
      <h3 className="title">Settings</h3>
      <p>
        In order to give the user more control, several new settings were
        introduced:
      </p>
      <ul>
        <li id="judgement">
          <b>Judgement Model</b> &mdash; Instead of just a user metrics based
          approach, we now also provide a machine-learning powered model that
          can evaluate if a given pasted code fragment is appropriate for
          extraction.
        </li>
        <li>
          <b>Model Sensitivity</b> &mdash; Should the aforementioned model be
          selected, there's also a setting to adjust how sensitive it is. In
          other words, this setting enables customizability over how
          frequently extractions get recommended.
        </li>
        <li>
          <b>Name Recommendation Model</b> &mdash; The plugin can now use an
          ML model to generate name recommendations for the extracted methods
          based on the content of them. The current options include the IntelliJ
          built-in model and the Code2Vec model.
        </li>
        <li>
          <b>Clone Type</b> &mdash; Since the extractor is now custom, we have
          provided an option to influence its behavior. Users can choose to
          extract type one clones only (exact matches), or type two clones
          (fragments with changes in variable name, expressions, or literals).
        </li>
        <li>
          <b>Max Parameters</b> &mdash; Another extractor customization, this
          setting allows you to choose the maximum number of parameters an
          extracted method may have.
        </li>
      </ul>
      <img src="/img/settings.png" />
    </div>
  );
};

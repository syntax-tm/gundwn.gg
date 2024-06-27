import './title.css';

const header = 'Trey (Gundwn)';
const caption = 'Speedrunner of life and games';

export default function Title() {
  return (
    <>
      <header>
        <section className="title" id="title">
          <h1>{header}</h1>
          <p>{caption}</p>
        </section>
      </header>
    </>
  );
}

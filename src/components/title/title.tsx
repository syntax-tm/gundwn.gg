import { h3general } from "@components/icons/icons";
import './title.css';

const header = 'trey';
const caption = 'speedrunner of life and games.™';

export default function Title() {
  return (
    <>
      <header>
        <section className="title grid grid-cols-3 gap-3" id="title">
          {/* <div className='text-right'>
            <h1 className=''>{header}</h1>
            <p><i>{caption}</i></p>
          </div> */}
          <div className=''>
            {h3general}
          </div>
        </section>
      </header>
    </>
  );
}

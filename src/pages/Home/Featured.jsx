import { Book } from 'components/components'
export default function Featured() {
  return (
    <section id="featured">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="text--purple">Books</span>
          </h2>
          <div className="books">
            <Book />
          </div>
        </div>
      </div>
    </section>
  );
}

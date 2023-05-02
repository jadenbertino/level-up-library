import { DisplayFourBooks} from 'components/components'

export default function PopularBooks() {
  return (
    <section id="featured">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Popular <span className="text--purple">Books</span>
          </h2>
          <div className="books">
            <DisplayFourBooks />
          </div>
        </div>
      </div>
    </section>
  );
}

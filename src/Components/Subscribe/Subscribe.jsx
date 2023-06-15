import './Subscribe.scss';

export const Subscribe = () => {
  return (
    <section className="subscribe">
      <h1>Subscribe to our newsletter</h1>
      <p>and get $20 off your new membership or your next order in our store</p>
      <form action="">
        <input type="email" placeholder="name@mail.com" />
        <button type="submit">SUBSCRIBE</button>
      </form>
      <span>We don't spam. I mean... Spam is in a can. Why would we put your email in a can?</span>
    </section>
  );
}
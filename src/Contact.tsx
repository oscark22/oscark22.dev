const Contact = () => {
  return (
    <section className="relative h-screen w-full mx-auto bg-[#030D1F] paddingX marginTop bg-wave-pattern-2 bg-cover">
      <div className="flex h-full flex-row sm:pb-16 pb-6 justify-center">
        <div className="flex h-5/6 lg:h-full w-full flex-col max-w-[500px] bg-primary p-8 rounded-lg self-center">
          <p className="text-white">Let's get in Touch</p>
          <h2 className="text-white text-5xl font-serif">Contact me</h2>
          <form className="flex flex-col mt-8 gap-5 flex-grow">
            <div className="flex flex-col w-full">
              <p className="text-white">What's your name?</p>
              <input
                className="mt-1 rounded-md p-1"
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div className="flex flex-col w-full">
              <p className="text-white">What's your email?</p>
              <input
                className="mt-1 rounded-md p-1"
                type="text"
                id="email"
                name="email"
              />
            </div>
            <div className="flex flex-col h-full w-full">
              <p className="text-white">Your message</p>
              <textarea
                className="h-full resize-none mt-1 rounded-md p-1"
                id="message"
                name="message"
              />
            </div>
            <div className="flex flex-col px-3 py-2 bg-secondary self-start rounded-md ring-2 ring-white ring-offset-transparent text-white hover:bg-primary">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import Swal from "sweetalert2";

const Contact = () => {
  const handleLinkedInClick = () => {
    window.open("https://linkedin.com/in/ezequielmadrid97", "_blank");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Swal.fire({
      title: "Hey!",
      text: "Chat me on LinkedIn",
      icon: "success",
      confirmButtonText: "My profile",
    }).then((result) => {
      if (result.isConfirmed) {
        handleLinkedInClick();
      }
    });
  };

  return (
    <div className="absolute inset-0 w-full h-full flex flex-cols justify-center items-center font-mono">
      <div className="bg-opacity-50 w-[380px] mt-16 p-4 bg-gray-800 text-white rounded-lg shadow-lg z-[10]">
        <h2 className="text-3xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 mb-2">
          What are you msg?
        </h2>
        <p className="text-gray-300 mb-4 text-center">Let's chat!</p>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            className="border bg-black border-cyan-400  text-cyan-400  py-2 px-4 rounded-xl"
            type="text"
            placeholder="George Boole"
          />
          <input
            className="border bg-black border-cyan-400  text-cyan-400  py-2 px-4 rounded-xl"
            type="email"
            placeholder="example@gmail.com"
          />
          <input
            className="border bg-black border-cyan-400  text-cyan-400 py-2 px-4 rounded-xl"
            type="text"
            placeholder="type here your message..."
          />

          <button
            className="mb-20 border bg-black border-cyan-400 animate-pulse text-cyan-400 font-bold py-2 px-4 rounded-xl"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

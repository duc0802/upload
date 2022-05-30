import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [File, setFile] = useState();
  const url =
    "https://api.imgbb.com/1/upload?key=ebb783c90735aa8707cdfa442b99007b";
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFile(e.target.files);
  };

  const handleSubmit = async (e) => {
    const formData = new FormData();
    for (const i in File) {
      formData.append("file", File[i]);
    }
    try {
      const res = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center">
          <h2>Upload and share your images</h2>
          <label className="relative border-0 outline-none inline-flex items-center justify-center bg-violet-500 text-white cursor-pointeri px-4 py-3.5 font-bold min-w-[clamp(0px,(492px-100%)*999,100%)] rounded-[10px] select-none transition-[background-color] ease-in-out duration-[250ms]  hover:bg-violet-800">
            <input
              type="file"
              name="file"
              id="file"
              multiple
              onChange={handleChange}
              className="overflow-hidden absolute inset-0 z-[-1] opacity-0"
            />
            Choose files
          </label>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Home;

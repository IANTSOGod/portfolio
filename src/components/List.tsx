export default function List() {
  const songs = [
    {
      id: 1,
      name: "2022",
      title: "Bacc serie C Madagascar Mention bien",
      img: "https://img.daisyui.com/images/profile/demo/1@94.webp",
    },
    {
      id: 2,
      name: "2023",
      title: "Entered in Ankatso University mention MIT",
      img: "https://img.daisyui.com/images/profile/demo/4@94.webp",
    },
    {
      id: 3,
      name: "2025 (now)",
      title: "Preparing SI Licence",
      img: "https://img.daisyui.com/images/profile/demo/3@94.webp",
    },
  ];

  return (
    <div>
      <ul className="list bg-base-100 rounded-box shadow-md">
        {songs.map((song) => (
          <li key={song.id} className="list-row flex items-center gap-4 p-2">
            <div>
              <img
                className="size-10 rounded-box"
                src={song.img}
                alt={song.name}
              />
            </div>
            <div>
              <div>{song.name}</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                {song.title}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

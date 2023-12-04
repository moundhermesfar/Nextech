import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import MembersCard from "../components/MembersCard";
import Members from "../../data/Members.json";

const Home = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setMembers(Members);
    setLoading(false);
  }, []);

  return (
    <div className="p-4">
      <header className="text-center mb-8">
        <img
          src="https://doc-14-9k-docs.googleusercontent.com/docs/securesc/3c7foilo152o43me9ordrrb8lfkjicor/mctr93vml9l5b7nrjj52ot3ha3fsbfl2/1701716100000/18433896908130282843/00460206133565270480/1QEy81Lh8ljlv9Sq3cdVR7JFSrap-YlqA?ax=AEqgLxmvtCFVCbGzIcZ_MeVD6tnu9_TJMEIyEw435kGsa4vOAKGhA7OTuDzDj8EboSXjF6dlnx3EwwHZ-34TKVmdToy6k9kCnwv3FZq0J04uI_JpWOXx64lINcXmr2cdC_j0_zGgXUlnP08-b3VPIlsuybxyPgjQPYTfmxZLvrtG7ufFLfcUhcSKu-Vw4Z21LkoJ0eW0NPvwEOaghZ1ti3ItZlr2tuaqaIfmy3calDSrBAkCqvscE0HakhgHTiI5TugWiw1v5_3d-qizWuERSJRS-Z3UjvCjVQSgf3eIeze3XTT3Y1HyrMz5SkQ3QIg2H09Zb09urmaJPlMxeadMOgw0wFPGd0obKX93eBMoRNv7T_-veRojuwVt1EhtROkHfshe37qe-5ITGFRZiNFJo0Tpi3dN3dpcCEiKRkVytsCR7PQ27jKGJk0LiFFZ7r0ED8vvELAvjJoTKiHb3JVANTG54UXjfgrPh42isE_TlVRcGHIpVWlGd7l824jpUYawX_ToBepqa0wn0oXKa4J-okeWsNMpXCpc6OKmR7c0vqr3Fw5Gl4XnNNK_-1HGx5L_K08L59W84nfJG9rKZKmkkaJQodAXd2ORK_aQATphwQrvSpdPCdBziCFW7RRMyUzZIGKguj7lOzrgkW0jutEnJDZmFaqkzEt1TOvAYzZK0nwY_DqbZ1aLA7oOUeUzJLM_ei7U2vFh2asH49155rkI6fsHDAUt7Vyk4a1ApF0GS5KptVPlhKS6hoVYdzb4PAmj9TOn-FH2XKxWjzRJOMFe5QELt5PFuoQn9FdAbyZxInw8LdvM5wg_Ia-k1oL-j4r7YiXojXzBYyIejTWUkyIz-yHFh7_nQ57U6IdKQgVLrsYsHGaVE4g4dxm0mr9sNn44zhwk2s5E7-2Aew5xthQ&uuid=8addea20-a212-44f8-8f97-a052aa94c220&authuser=0&nonce=dasau39kst3sk&user=00460206133565270480&hash=a7t7l84ouki8rt12549i16a8g1gidnn4"
          alt="Club Logo"
          className="mx-auto mb-4"
          style={{ maxWidth: "150px" }}
        />
        <h1 className="text-4xl font-bold">Welcome to Our Club</h1>
        <p className="text-gray-400 mt-2">
          Discover and connect with our amazing community!
        </p>
      </header>
      <div className="flex flex-col items-center">
        <Link to="/members/create">
          <button className="bg-red-500 text-white px-4 py-2 rounded border border-red-500 hover:text-red-500 hover:bg-white hover:border-red-500">
            Register Now
          </button>
        </Link>
        <h1 className="text-3xl my-8">Meet Our Members</h1>
      </div>
      {loading ? <Spinner /> : <MembersCard members={members} />}

      <footer className="mt-8 p-6 bg-gray-800 flex flex-col items-center text-white">
        <p className="text-lg font-semibold mb-4">
          Be a part of our community
        </p>
        <div className="flex justify-around w-full">
          <a
            href="https://www.facebook.com/profile.php?id=61553474487971"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "1rem" }}
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              color="white"
              className="hover:text-red-500"
            />
          </a>
          <a
            href="https://www.instagram.com/nextech.squad/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "1rem" }}
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              color="white"
              className="hover:text-red-500"
            />
          </a>
          <a
            href="https://discord.gg/pp9KnpcJEv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faDiscord}
              size="2x"
              color="white"
              className="hover:text-red-500"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;

import axios from 'axios';
import { useState, useEffect } from 'react';

export default function CarrouselDiscordServer() {
  const serverIds = ['id1', 'id2', 'id3']; // reemplace con sus propios IDs de servidor
  const [servers, setServers] = useState([]);

  useEffect(() => {
    const fetchServers = async () => {
      const serversData = [];
      for (const id of serverIds) {
        const response = await axios.get(`https://discord.com/api/guilds/${id}`, {
          headers: {
            'Authorization': `Bot ${process.env.DISCORD_BOT_TOKEN}`
          }
        });
        serversData.push(response.data);
      }
      setServers(serversData);
    };

    fetchServers();
  }, []);

  return (
    <section className="carrousel">
      {servers.map((server, index) => (
        <div key={index}>
          {server.name} // reemplace con los datos que desea mostrar
        </div>
      ))}
    </section>
  );
}

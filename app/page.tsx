'use client'; 
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SpotifyUser } from './interfaces/profile';

const params = new URLSearchParams({
  response_type: 'code',
  client_id: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID as string,
  scope: 'user-read-private user-read-email',
  redirect_uri: process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI as string,
  state: '1234'
});

const StyledButton = styled.button`
  background-color: #4CAF50; 
  color: white; 
  padding: 10px 20px; 
  border: none; 
  border-radius: 5px; 
  font-size: 20px; 

  &:hover {
    background-color: #45a049; 
  }
`
const ProfileContainer = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border: 2px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: #f9f9f9;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const ProfileHeading = styled.h1`
  font-size: 25px;
  margin-bottom: 10px;
  color: #333;
  font-family: 'Arial', sans-serif;
`;

const ProfileInfo = styled.p`
  font-size: 20px;
  margin: 5px 0;
  color: #666;
  font-family: 'Arial', sans-serif;
`;

const SubHeading = styled.h2`
  font-size: 10px;
  margin-top: 20px;
  color: #4CAF50;
  font-family: 'Arial', sans-serif;
`;

export default function HomePage() {
  const [user, setUser] = useState<SpotifyUser | null>(null);

  useEffect(() => {
    fetchData();
  },[]);

  const handleSignOut = () => {
    document.cookie = 'token=; Max-Age=0; Path=/'; 
    setUser(null); 
  };

  const fetchData = () => {
      fetch('/api/user', { credentials: 'include' })
          .then((response) => response.text())
          .then((text) => {
            setUser(JSON.parse(text))
            console.log(user)
          })
          .catch((error) => console.error('Error fetching user:', error));
  }

  return (
    <div>
      {!user ? (
        <div>
          <StyledButton
            onClick={() => window.location.href = 'https://accounts.spotify.com/authorize?' + params.toString()}
          >
          Sign In with Spotify
          </StyledButton>
        </div>
      ) : (
        <div>
          <ProfileContainer>
            <ProfileHeading>Profile</ProfileHeading>
            <ProfileImage
              src={user.images[0].url}
              alt={`${user.display_name}'s profile picture`}
              />
            <ProfileInfo>User: {user.display_name}</ProfileInfo>
            <ProfileInfo>Email: {user.email}</ProfileInfo>
            <SubHeading>Signed in with Spotify</SubHeading>
          </ProfileContainer>
          
          <StyledButton
            onClick={handleSignOut}
          >
            Sign Out
          </StyledButton>
        </div>
      )}
    </div>
  );
}
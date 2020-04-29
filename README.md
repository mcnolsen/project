# Project for a client

<h2>Client: Roskilde SUP Klub</h2>

<h2>Installations guide:</h2>
<p>Først og fremmest, pull dette projekt ned</p>
<p>Lav .env fil i projektets root folder med DB_CONNECTION = <(Indsæt den mongoose/mongodb database string her)> </p>
<p>Kør 'npm install' i terminalen</p>

<h2>Needs:</h2>
They need a website containing basic information about prices and such. The main goal, however, is to create a login page for the members of the club for them to reserve boards they use for paddling to make it easier to see if a board is reserved or available.  

How to make the boards idé
1 tabel med boards
1 anden tabel med boards og tidspunkter. Hvis det er identisk med det indtastede, afvis
localstorage som login check. Tjek for username i localstorage og brug det username til at tage data fra databasen.
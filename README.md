# Book Review Mobile App – Backend

Ovaj projekat predstavlja **backend deo mobilne aplikacije** razvijene u okviru React Native okruženja.  
Backend je implementiran korišćenjem **Node.js**, **Express.js** i **MongoDB**, i služi za autentifikaciju korisnika, upravljanje knjigama i čuvanje slika pomoću Cloudinary servisa.

## Tehnologije
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (JSON Web Token) autentifikacija
- Cloudinary (upload i čuvanje slika)
- bcrypt (hashovanje lozinki)
- dotenv
- CORS

## Funkcionalnosti
- Registracija i prijava korisnika
- JWT autentifikacija i zaštita ruta
- Kreiranje, čitanje i upravljanje knjigama
- Dodavanje opisa, ocene i slike za knjigu
- Povezivanje knjige sa korisnikom koji ju je kreirao
- Upload slika na Cloudinary servis

## Struktura projekta
src/
├── lib/
│ ├── db.js # Konekcija sa MongoDB bazom
│ └── cloudinary.js # Cloudinary konfiguracija
│
├── middleware/
│ └── protectRoute.js # JWT zaštita ruta
│
├── models/
│ ├── User.js # User schema
│ └── Book.js # Book schema
│
├── routes/
│ ├── authRoutes.js # Autentifikacija
│ └── bookRoutes.js # CRUD operacije za knjige
│
└── server.js # Ulazna tačka aplikacije

## Modeli

### User
- username
- email
- password (hashovan)
- profileImage

### Book
- title
- caption
- image
- rating (1–5)
- user (referenca na User model)

## Autentifikacija
Aplikacija koristi **JWT token** koji se prosleđuje kroz `Authorization` header u formatu:


Zaštićene rute su dostupne samo autentifikovanim korisnicima.

## Pokretanje projekta

1. Instalirati zavisnosti:
```bash
npm install
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
npm start

Server ce biti dostupan na
http://localhost:3000




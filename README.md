# Social Media Dashboard

Dashboard untuk menampilkan aktivitas social media. Dibangun menggunakan [Create React App](https://github.com/facebook/create-react-app) dan merupakan Single Page Applcation based on [React Router](https://reactrouter.com)

Live demo dapat juga diakses di netlify pada link [ini](https://arwanfiles-social-media-dashboard.netlify.app/)
## How To Run Application

Sebelum running aplikasi ini, baik melalui docker maupun secara langsung pada machine, terlebih dahulu create file .env pada root project, atau copy dari .env.example

### Docker Based

Untuk menjalankan aplikasi di dalam docker, cukup lakukan perintah:
```
docker-compose up -d --build
```
Selanjutnya, buka browser dan akses melalui url http://localhost:3000

Untuk menghentikan aplikasi, run:
```
docker-compose stop
```

### Node JS

Untuk menjalankan aplikasi langsung pada machine host, atau untuk keperluan development, terlebih dulu install nodejs dependency nya dengan cara:
```
npm install
```
Setelah dependency terinstall, start aplikasi nya dengan perintah:
```
npm start
```
Selanjutnya, buka browser dan akses melalui url http://localhost:3000

Note: aplikasi ini di develop memakai nodejs versi 12.16.3

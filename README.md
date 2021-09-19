# Social Media Dashboard

Dashboard untuk menampilkan aktivitas social media. Dibangun menggunakan [Create React App](https://github.com/facebook/create-react-app) dan merupakan Single Page Applcation based on [React Router](https://reactrouter.com) dan State management menggunakan [Redux](https://redux.js.org/)

Menggunakan API dari https://jsonplaceholder.typicode.com, aplikasi ini mempunyai scenario sebagai berikut:

- Visitor diarahkan ke halaman dashboard
- Halaman dashboard berisi user list dan widget untuk add a new post
- Saat click user, akan diarahkan ke halaman user yang berisi list post dan list album dari user tersebut
- Di halaman ini ada fitur untuk menghapus post yang ditampilkan
    * Jika memilih salah satu album, visitor diarahkan ke halaman detail album, berisi photo-photo pada album yang dipilih, dan menampilkan detail photo dalam bentuk lightbox jika memilih salah satu photo
    * Jika memilih salah satu post, visitor akan diarahkan ke halaman detail post, halaman ini menampilkan list comment dari post tersebut. Pada halaman ini terdapat juga fitur untuk edit isi judul dan body post, edit tiap comment, serta menghapus comment item.

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

## Dependency
- Tailwindcss
- react-data-table-component
- react-image-lightbox

## Script and Style Rule
- Eslint -> Standard
- Stylelint -> Standard

## Not Yet Implement
- Authentication
- Unit test

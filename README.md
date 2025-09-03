# MathTraining

Dockerfile dla backendu: katalog wewnątrz kontenera gdzie będą znajsowały się pliki backendu jest /app. Kopiowany jest tam plik requirements i pobierane są wszystkie zależności. Backend jest wystawiony na porcie 5000

<img width="516" height="290" alt="image" src="https://github.com/user-attachments/assets/c77f72af-0ba7-4542-89df-861a9def685a" />


Dockerfile dla frontendu: wykorzystałem podejście multi stage building, końcowy obraz dzięki temu podejściu jest mniejszy

<img width="540" height="494" alt="image" src="https://github.com/user-attachments/assets/4b35393d-d2a0-4c78-aa95-a10a0f06b3ca" />


Docker compose: Uruchamiane są kontenery za podstawie obrazów stworzonych przez Dockerfile. Oba kontenery znajdują się w ten samej sieci dockerowej app_network  

<img width="329" height="710" alt="image" src="https://github.com/user-attachments/assets/7b3a6ff6-b589-4ac9-b3a6-ef9309311048" />


Jenkinsfile:

<img width="424" height="749" alt="image" src="https://github.com/user-attachments/assets/70735404-bbf5-46d5-9acf-f602f572a1de" />


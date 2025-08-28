# MathTraining

Dockerfile dla backendu: katalog wewnątrz kontenera gdzie będą znajsowały się pliki backendu jest /app. Kopiowany jest tam plik requirements i pobierane są wszystkie zależności. Backend jest wystawiony na porcie 5000

<img width="623" height="327" alt="image" src="https://github.com/user-attachments/assets/f70de492-bb1b-4d78-b88c-f9a09219d798" />


Dockerfile dla frontendu: wykorzystałem podejście multi stage building, końcowy obraz dzięki temu podejściu jest mniejszy

<img width="648" height="579" alt="image" src="https://github.com/user-attachments/assets/252e92d6-6d5f-4460-8890-65fa473a94e3" />


Docker compose: Uruchamiane są kontenery za podstawie obrazów stworzonych przez Dockerfile. Oba kontenery znajdują się w ten samej sieci dockerowej app_network  

<img width="437" height="518" alt="image" src="https://github.com/user-attachments/assets/b034def4-719c-4156-af9d-da8b4ba6ddc3" />

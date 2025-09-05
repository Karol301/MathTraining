# MathTraining - Docker, Jenkins, Kubernetes, Terraform

Dockerfile dla backendu: katalog wewnątrz kontenera gdzie będą znajsowały się pliki backendu jest /app. Kopiowany jest tam plik requirements i pobierane są wszystkie zależności. Backend jest wystawiony na porcie 5000

<img width="610" height="331" alt="image" src="https://github.com/user-attachments/assets/abb21ed5-f767-49d1-aac4-5cb28f11f629" />


Dockerfile dla frontendu: wykorzystałem podejście multi stage building, końcowy obraz dzięki temu podejściu jest mniejszy

<img width="633" height="580" alt="image" src="https://github.com/user-attachments/assets/a1e65236-6371-4c9f-9ae5-28be69035602" />


Docker compose: Uruchamiane są kontenery za podstawie obrazów stworzonych przez Dockerfile. Oba kontenery znajdują się w ten samej sieci dockerowej app_network  

<img width="435" height="888" alt="image" src="https://github.com/user-attachments/assets/35f97603-d432-4ce9-8643-14ceea7770f1" />


Jenkinsfile: 

<img width="677" height="911" alt="image" src="https://github.com/user-attachments/assets/12b0f099-d833-4625-92f6-1b292f5cdea4" />

<img width="1438" height="304" alt="image" src="https://github.com/user-attachments/assets/6f4b6840-7139-45a7-a156-de48f9895526" />


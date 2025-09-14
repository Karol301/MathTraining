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

Kubernetes:

1.Deployment  

<img width="1146" height="469" alt="image" src="https://github.com/user-attachments/assets/73670157-5e77-43c0-a80c-b8578a573eee" />


2.Namespace

<img width="915" height="87" alt="image" src="https://github.com/user-attachments/assets/db16be27-d03a-4919-b4c8-348efc7acd8d" />


3.Services

<img width="970" height="258" alt="image" src="https://github.com/user-attachments/assets/5a95fea8-b66b-4c0e-900c-4d11f5c077bf" />


4.Horizontal autoscaling 

<img width="1148" height="527" alt="image" src="https://github.com/user-attachments/assets/ce425745-523d-4d54-8bdb-0a1611ddad8c" />

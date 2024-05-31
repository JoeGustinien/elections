document.addEventListener('DOMContentLoaded', function () {
    // Fonction pour charger les données JSON
    function loadCandidates() {
        fetch('candidates.json')
            .then(response => response.json())
            .then(data => {
                displayCandidates(data);
            })
            .catch(error => console.error('Error fetching the JSON data:', error));
    }

    // Fonction pour afficher les candidats
    function displayCandidates(data) {
        const listsContainer = document.getElementById('lists');

        data.forEach(list => {
            const listDiv = document.createElement('div');
            listDiv.className = 'list';

            const listTitle = document.createElement('h2');
            listTitle.textContent = list.listName;

            const headOfList = document.createElement('p');
            headOfList.innerHTML = `<strong>Tête de liste:</strong> ${list.headOfList}`;

            const programLink = document.createElement('p');
            programLink.innerHTML = `<a href="${list.programLink}" target="_blank">Programme</a>`;

            listDiv.appendChild(listTitle);
            listDiv.appendChild(headOfList);
            listDiv.appendChild(programLink);

            const candidatesList = document.createElement('ul');

            list.candidates.forEach(candidate => {
                const candidateItem = document.createElement('li');
                let candidateInfo = `<strong> ${candidate.position} ${candidate.name} </strong>`;

                if (candidate.age) {
                    candidateInfo += `, ${candidate.age} ans`;
                }

                if (candidate.profession) {
                    candidateInfo += ` - ${candidate.profession}`;
                }

                if (candidate.department) {
                    candidateInfo += ` (${candidate.department})`;
                }

                candidateItem.innerHTML = candidateInfo;
                candidatesList.appendChild(candidateItem);
            });

            listDiv.appendChild(candidatesList);
            listsContainer.appendChild(listDiv);
        });
    }

    // Charger les candidats au chargement de la page
    loadCandidates();
});

document.addEventListener('DOMContentLoaded', function() {
    // Dados detalhados dos jogadores
    const playersData = {
        "Patrick Mahomes": {
            idade: "29 anos",
            draft: "2017 - 1ª rodada, 10º overall",
            recordes: "Considerado o melhor QB da geração",
            curiosidade: "Filho de um ex-jogador da MLB"
        },
        "Justin Jefferson": {
            idade: "26 anos",
            draft: "2020 - 1ª rodada, 22º overall",
            recordes: "Mais jardas recebidas nos 3 primeiros anos na NFL",
            curiosidade: "Campeão nacional universitário com LSU em 2019"
        },
        "Josh Allen": {
            idade: "29 anos",
            draft: "2018 - 1ª rodada, 7º overall",
            recordes: "Primeiro QB com 4.000+ jardas aéreas e 750+ terrestres em temporada",
            curiosidade: "Jogou beisebol universitário"
        },
        "Lamar Jackson": {
            idade: "28 anos",
            draft: "2018 - 1ª rodada, 32º overall",
            recordes: "Único QB com 1.000+ jardas terrestres em múltiplas temporadas",
            curiosidade: "Venceu o Heisman Trophy em 2016"
        },
        "Saquon Barkley": {
            idade: "28 anos",
            draft: "2018 - 1ª rodada, 2º overall",
            recordes: "Offensive Rookie of the Year em 2018",
            curiosidade: "Nascido no Bronx, Nova York"
        },
        "Ja'Marr Chase": {
            idade: "25 anos",
            draft: "2021 - 1ª rodada, 5º overall",
            recordes: "Recorde de jardas recebidas por um novato nos Bengals",
            curiosidade: "Ex-companheiro de Justin Jefferson no LSU"
        },
        "George Kittle": {
            idade: "31 anos",
            draft: "2017 - 5ª rodada, 146º overall",
            recordes: "Recorde de jardas por um TE em temporada (1.377 em 2018)",
            curiosidade: "Conhecido por seu bloqueio excepcional"
        },
        "Derrick Henry": {
            idade: "31 anos",
            draft: "2016 - 2ª rodada, 45º overall",
            recordes: "8º jogador na história a correr 2.000+ jardas em temporada",
            curiosidade: "Venceu o Heisman Trophy no futebol americano universitário em 2015"
        }
    };

    // Configurar botões "Ver Detalhes" (mantido igual)
    const moreButtons = document.querySelectorAll('.btn-more');
    
    const moreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.player-card');
            const playerName = card.querySelector('h3').textContent;
            const stats = card.querySelector('p:nth-of-type(3)').textContent;
            const details = playersData[playerName];
            
            let message = `Estatísticas de ${playerName} (2022-2023):\n${stats}\n\n`;
            message += `Idade: ${details.idade}\n`;
            message += `Draft: ${details.draft}\n`;
            message += `Recordes: ${details.recordes}\n`;
            message += `Curiosidade: ${details.curiosidade}`;
            
            alert(message);
        });
    });

    // Validação do formulário de contato - VERSÃO ATUALIZADA
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Limpa erros anteriores
            clearErrors();
            
            let isValid = true;
            
            // Validação do nome
            const name = document.getElementById('name');
            if (name.value.trim() === '') {
                showError(name, 'Por favor, insira seu nome.');
                isValid = false;
            }
            
            // Validação do email
            const email = document.getElementById('email');
            if (email.value.trim() === '') {
                showError(email, 'Por favor, insira seu e-mail.');
                isValid = false;
            } else if (!isValidEmail(email.value)) {
                showError(email, 'Por favor, insira um e-mail válido.');
                isValid = false;
            }
            
            // Validação da mensagem
            const message = document.getElementById('message');
            if (message.value.trim() === '') {
                showError(message, 'Por favor, insira sua mensagem.');
                isValid = false;
            }
            
            // Se houver erros, impede o envio
            if (!isValid) {
                e.preventDefault();
            } else {
                // Se válido, mostra mensagem mas permite o envio pelo Formspree
                showSuccess('Enviando mensagem...');
                
                // Opcional: Adicione um timeout para garantir que o Formspree processe
                setTimeout(() => {
                    contactForm.reset();
                }, 2000);
            }
        });
        
        // Funções auxiliares (mantidas iguais)
        function showError(input, message) {
            const formGroup = input.parentElement;
            const errorMessage = formGroup.querySelector('.error-message');
            errorMessage.textContent = message;
            input.style.borderColor = '#D50A0A';
        }
        
        function clearErrors() {
            const errorMessages = document.querySelectorAll('.error-message');
            errorMessages.forEach(msg => msg.textContent = '');
            
            const inputs = document.querySelectorAll('input, textarea');
            inputs.forEach(input => input.style.borderColor = '#ddd');
        }
        
        function showSuccess(message) {
            const successMessage = document.getElementById('success-message');
            successMessage.textContent = message;
            successMessage.style.display = 'block';
            
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        }
        
        function isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }
    }
});

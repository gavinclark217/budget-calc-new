import Chart from 'chart.js/auto'



(async function () {

    // let spending = 0;
    // spending[0] = document.getElementById('Housing').value;
    // spending[1] = document.getElementById('Utilities').value;
    // spending[2] = document.getElementById('Transportation').value;
    // spending[3] = document.getElementById('Food').value;
    // spending[4] = document.getElementById('Debt').value;
    // spending[5] = document.getElementById('Clothing').value;
    // spending[6] = document.getElementById('Entertainment').value;
    // spending[7] = document.getElementById('Savings').value;

    let data = {
        labels: [
            'Housing',
            'Utilities',
            'Transportation',
            'Food',
            'Debt',
            'Clothing',
            'Entertainment',
            'Savings'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [2000, 380, 830, 322, 0, 300, 2400, 1000],
            backgroundColor: [
                'rgb(255, 0, 0)',
                'rgb(0, 255, 0)',
                'rgb(0, 0, 255)',
                'rgb(255, 255, 0)',
                'rgb(0, 255, 255)',
                'rgb(255, 0, 255)',
                'rgb(0, 0, 0)',
                'rgb(150, 150, 150)'
            ],
            hoverOffset: 4
        }]
    };

    

    new Chart(
        document.getElementById(`chart`),
        {
            type: `pie`,
            data: data
        }
    )
})();
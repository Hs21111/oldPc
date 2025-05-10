function make_chart(){
    if (typeof parseInt(document.getElementById('principal').value) === 'number' && typeof parseInt(document.getElementById('term').value) === 'number'){
        if (!isNaN(parseInt(document.getElementById('principal').value) && !isNaN(parseInt(document.getElementById('term').value)))){

            const PRINCIPAL = parseFloat(document.getElementById('principal').value);
            console.log(PRINCIPAL);

            const INTEREST_RATE = document.getElementById('rate').value;
            console.log(INTEREST_RATE);

            const TERM =  parseFloat(document.getElementById('term').value);
            console.log(TERM);

            let simple_interest_amounts = new Array();
            simple_interest_amounts.push(PRINCIPAL);

            for (let i = 0; i < TERM; i++) {
                simple_interest_amounts.push(PRINCIPAL + (PRINCIPAL * INTEREST_RATE * (i + 1)) / 100);
            }

            console.log(simple_interest_amounts);

            let compound_interest_amounts = new Array();
            compound_interest_amounts.push(PRINCIPAL);

            for (let i = 0; i < TERM; i++) {
                compound_interest_amounts.push(Math.round(PRINCIPAL * ((1 + (INTEREST_RATE / 100)) ** (i + 1))));
            }

            console.log(compound_interest_amounts);

            let time = new Array();

            for (let i = 0; i <= TERM; i++) {
                time.push(i);
            }

            console.log(time);

            const trace1 = {
                x: time,
                y: simple_interest_amounts,
                type: 'scatter',
                mode: 'lines+markers+text',
                name: 'Simple Interest',
                line: {
                    color: "#FF00FF"
                },
                marker: {
                    color: "#FF00FF",
                    size: 12,
                },
                text: simple_interest_amounts,
                textposition: 'top center',
                textfont: {
                    color: "#FF00FF",
                    size: 12,
                }
            };

            const trace2 = {
                x: time,
                y: compound_interest_amounts,
                type: 'scatter',
                mode: 'lines+markers+text',
                name: 'Compound Interest',
                line: {
                    color: "#FFFF00"
                },
                marker: {
                    color: "#FFFF00",
                    size: 12,
                },
                text: compound_interest_amounts,
                textposition: 'top center',
                textfont: {
                    color: "#FFFF00",
                    size: 12,
                }
            };

            const layout = {
                title: {
                    text: 'Simple Interest',
                    font: { color: '#ffffff' }
                },
                xaxis: {
                    title: { text: 'Years', font: { color: '#ffffff' } },
                    tickfont: { color: '#ffffff' },
                    gridcolor: '#444444'
                },
                yaxis: {
                    title: { text: 'Amount', font: { color: '#ffffff' } },
                    tickfont: { color: '#ffffff' },
                    gridcolor: '#444444'
                },
                showlegend: true,
                legend: {
                    font: { color: '#ffffff' },
                    bgcolor: '#2a2a2a'
                },
                paper_bgcolor: '#2a2a2a',
                plot_bgcolor: '#2a2a2a',
                margin: { t: 50, b: 50, l: 50, r: 50 },
                hovermode: 'x unified' // Disable all hover interactions
            };


            const chartDiv = document.getElementById('myChart');
            if (!chartDiv) {
                console.error('Error: Chart div with id "myChart" not found. Ensure the div exists in the DOM before plotting.');
            }


            return [[trace1, trace2], layout]

        }
    }
}

let hi = make_chart();
Plotly.newPlot('myChart', hi[0], hi[1]);
const allBtn = document.getElementsByClassName('ad-btn');
let totalPrice = 0 ;
let seat = 0;
let remainSeat = 40;
for (const btn of allBtn){
    btn.addEventListener('click',function(event){
        

        document.getElementById('phone-number').addEventListener('keyup',function(event){
            document.getElementById('next-btn').disabled = false;
        })


        const seatNumber = event.target.innerText;
        seat += 1;
        remainSeat -= 1;
        if(seat==4){
            document.getElementById('get-offer').disabled = false;
        }
        if(seat>4 || remainSeat<0){
            alert('You can get maximum 4 tickets at a time !')
            return;
        }
        btn.disabled = true;
        event.target.style.backgroundColor = '#1DD100';
        // event.target.style.text-color = 'white';
        console.log(event.target.classList)
        event.target.classList.add('text-white')



        // console.log(seatNumber)
        document.getElementById('indicator').innerText = seat;
        document.getElementById('remain-seat').innerText = remainSeat;

        const seatContainer = document.getElementById('seat-container');
        const div = document.createElement('div');
        div.classList.add('flex');
        div.classList.add('gap-x-19');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        p1.innerText = seatNumber;
        p2.innerText = 'Economy';
        p3.innerText = '550';
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        seatContainer.appendChild(div);
        
        totalPrice += 550;
        const totalPriceElement = document.getElementById('total-price');
        // const totalPrice = parseInt(totalPriceText);
        totalPriceElement.innerText = totalPrice;

        const grandTotalElement = document.getElementById('grand-total');
        // const grandTotal = (grandTotalElement.innerText);
        grandTotalElement.innerText = totalPrice;
        // console.log(grandTotalElement);

        document.getElementById('next-btn').addEventListener('click',function(){
            document.getElementById('success-page').classList.remove('hidden');
            document.getElementById('first-page').classList.add('hidden');
            document.getElementById('continue-btn').addEventListener('click',function(){
                document.getElementById('first-page').classList.remove('hidden');
                document.getElementById('success-page').classList.add('hidden');
                totalPrice = 0 ;
                seat = 0;
                remainSeat = 40;
                reset();
            })
        })
        

    })
}

const getOffer = document.getElementById('get-offer');
        getOffer.addEventListener('click',function(event){
            const val = document.getElementById('coupoun-code').value;
            if(val==='NEW15'){
                let discount = parseInt(totalPrice*0.15);
                let totalPriceValue = parseInt(document.getElementById('total-price').innerText);
                totalPriceValue -= discount;
                const grandTotalElement = document.getElementById('grand-total');
                grandTotalElement.innerText = totalPriceValue - discount;

                const discountDiv = document.getElementById('discount-div');
                const p1 = document.createElement('h1');
                const p2 = document.createElement('h1');
                p1.classList.add('font-bold');
                p2.classList.add('font-bold');
                p1.innerText = 'Discount';
                p2.innerText = discount;
                discountDiv.appendChild(p1);
                discountDiv.appendChild(p2);
                document.getElementById('coupoun+apply').classList.add('hidden');
            }
            else if(val==='Couple 20'){
                let discount = parseInt(totalPrice*0.20);
                let totalPriceValue = parseInt(document.getElementById('total-price').innerText);
                totalPriceValue -= discount;
                const grandTotalElement = document.getElementById('grand-total');
                grandTotalElement.innerText = totalPriceValue - discount;
                document.getElementById('coupoun+apply').classList.add('hidden');
            }
            else{
                alert('Enter a Valid Coupoun Code !')
            }
        })

const result=document.querySelectorAll('.counter')

const speed=200;

result.forEach(counter=>
    {
        const updatecount=()=>
        {
            const target=+counter.getAttribute('data-target');
            const jj=+counter.innerText;
            const inc=target/speed;

            if(jj<target)
            {
                counter.innerText  =jj+inc;
                setTimeout(updatecount,11)
            }
            else{
                counter.innerText=target;
            }

        }
        updatecount();
    }
    )
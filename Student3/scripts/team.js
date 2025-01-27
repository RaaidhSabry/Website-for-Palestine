document.addEventListener('DOMContentLoaded', function() {
    const teamMembers = document.querySelectorAll('.team-member');

    teamMembers.forEach((member, index) => {
        const imgElement = member.querySelector('img');
        const originalImage = imgElement.src;


        let hoverImage;
        switch (index) {
            case 0:
                hoverImage = '/Student3/images/bilal1.jpg';
                break;
            case 1:
                hoverImage = '/Student3/images/aathif.jpg';
                break;
            case 2:
                hoverImage = '/Student3/images/inam.jpg'; 
                break;
            case 3:
                hoverImage = '/Student3/images/raaidh.jpg';
                break;
            default:
                hoverImage = originalImage;
                break;
        }

        member.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.maxHeight='500px';
            this.style.border='1px solid white';
            this.querySelector('.description').style.display = 'block';
            imgElement.src = hoverImage;
            imgElement.style.boxShadow='0px 0px 10px rgb(218, 195, 141)';
        });

        member.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.maxHeight='200px';
            this.style.border='none';
            this.querySelector('.description').style.display = 'none';
            imgElement.src = originalImage;
            imgElement.style.boxShadow='none';
        });
    });
});
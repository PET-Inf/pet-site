<style>
    footer {
        background-color: #1E1E1E;
        color: #F0F0F0;
        align-items: center;
        justify-content: center;
        display: flex;
        gap: 1.25rem;
        padding: 1.2rem;
        flex-wrap: wrap;
        text-align: center;
    }

    footer p {
        margin: 0 5rem;
    }

    .logos {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;   /* espaçamento entre as logos */
    }

    .logos img:nth-of-type(1) {
        width: 200px;
        height: auto;
    }

    .logos img:nth-of-type(2) {
        width: 250px;
        height: auto;
    }

    @media (max-width: 600px) {
        footer {
            flex-direction: column; 
            gap: 1.5rem;              
            padding: 1.25rem;
            align-items: center;
        }

       .logos {
        display: flex;      
        justify-content: center;
        gap: 10px;
    }

    .logos img {
        max-width: 100px;     
        height: auto;
    }
}

</style>

<footer>
    <p>Copyright &copy; PET - Informática 2025</p>
    <div class="logos">
        <img src="logo_PUCRS.png" alt="Logo PUCRS">
        <img src="logo_MEC.png" alt="Logo MEC">
    </div>
    <p>Política de Privacidade</p>
</footer>
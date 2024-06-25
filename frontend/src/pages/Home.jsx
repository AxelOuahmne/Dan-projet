import React, { useState } from 'react';

function Home() {
    const [content, setContent] = useState({
        heading: '',
        text: '',
        benefits: [],
        cta: ''
    });

    const handleTeleprospecteursClick = () => {
        setContent({
            heading: 'Nouvelles Opportunités pour Téléprospecteurs',
            text: 'Vous êtes téléprospecteur à la recherche de nouvelles missions ? Découvrez un vaste éventail d’offres adaptées à vos compétences. Créez votre profil, mettez en avant vos atouts et laissez les entreprises vous trouver.',
            benefits: [
                'Accès Rapide aux Offres : Des nouvelles missions publiées quotidiennement.',
                'Visibilité Maximale : Un profil optimisé pour attirer les recruteurs.',
                'Évaluations et Commentaires : Construisez votre réputation avec des retours d’expériences.'
            ],
            cta: 'Inscrivez-vous maintenant et trouvez votre prochaine mission !'
        });
    };

    const handleCommerciauxClick = () => {
        setContent({
            heading: 'Avancez dans Votre Carrière Commerciale',
            text: 'En tant que commercial, vos compétences sont recherchées. Notre plateforme vous aide à trouver des missions qui correspondent à votre profil et à vos aspirations. Commencez à postuler à des offres dès aujourd\'hui.',
            benefits: [
                'Offres Personnalisées : Des recommandations d’emplois basées sur votre expérience.',
                'Postulez Rapidement : Un processus de demande simplifié.',
                'Gestion des Candidatures : Suivez facilement l’évolution de vos demandes.'
            ],
            cta: 'Créez votre profil dès aujourd’hui et boostez votre carrière !'
        });
    };

    const handleRegiesClick = () => {
        setContent({
            heading: 'Trouvez les Meilleurs Talents',
            text: 'Les régies peuvent recruter les meilleurs téléprospecteurs et commerciaux grâce à notre plateforme. Publiez vos annonces et accédez à un large éventail de profils qualifiés. Utilisez nos outils pour affiner vos recherches et trouver les missions idéales.',
            benefits: [
                'Publication Facile : Publiez vos offres rapidement.',
                'Accès à des Profils Qualifiés : Explorez une base de données riche et diversifiée.',
                'Outils de Filtrage : Trouvez les missions correspondant exactement à vos besoins.'
            ],
            cta: 'Publiez votre première annonce dès aujourd’hui et commencez à interagir !'
        });
    };

    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-content-center">
                        <h1>Votre Plateforme de connexion pour <br/>Téléprospecteurs, Commerciaux et Régies </h1>
                        <p>Trouvez les meilleurs talents et opportunités en un seul endroit</p>
                    </div>
                </div>
                <section className="info-section">
                    <div className="info-container">
                        <div className="info-box">
                            <div className="info-icon"><img src="https://www.effy.fr/chauffage-red.ae153c5c8f554c5c.svg"
                                                            alt="Icon 1"/></div>
                            <div className="info-text">Téléprospecteurs</div>
                        </div>
                        <div className="info-box">
                            <div className="info-icon"><img
                                src="https://www.effy.fr/isolation-green.26325c5a6e3a30ea.svg" alt="Icon 2"/></div>
                            <div className="info-text">Commerciaux</div>
                        </div>
                        <div className="info-box">
                            <div className="info-icon"><img
                                src="https://www.effy.fr/solar_no-hover.072b41991276b450.svg" alt="Icon 3"/></div>
                            <div className="info-text">Régies</div>
                        </div>
                        <div className="info-box">
                            <div className="info-icon"><img
                                src="https://www.effy.fr/solar_no-hover.072b41991276b450.svg" alt="Icon 4"/></div>
                            <div className="info-text">calculer primes & aides</div>
                        </div>
                        <div className="info-box">
                            <div className="info-icon">
                                <img src="https://www.effy.fr/travaux-purple.18febcebbc4115ea.svg" alt="Icon 5"/></div>
                            <div className="info-text">quels travaux realiser</div>
                        </div>
                    </div>
                </section>
            </section>

            <div className="our-packs">
                <div className="packs-title">
                    <h1>Pourquoi choisir MarketLine ?</h1>
                    <p style={{marginTop: '20px', fontSize: '18px'}}> Chez MarketLine, nous nous engageons à offrir une
                        expérience utilisateur optimale et des services de haute qualité. Notre objectif est de
                        faciliter les connexions entre téléprospecteurs, commerciaux et régies grâce à une plateforme
                        intuitive et performante.
                    </p>
                </div>
                <div className="container">
                    <div className="packs-content">
                        <div className="packs-options">
                            <div className="pack-option" onClick={handleTeleprospecteursClick}>
                                <div className="option-img"><img
                                    src="https://www.effy.fr/assets/img/icons/nhp/chauffage_selected.svg" alt=""/></div>
                                <div className="option-title"><h6>Pour les Téléprospecteurs</h6></div>
                            </div>
                            <div className="pack-option" onClick={handleCommerciauxClick}>
                                <div className="option-img"><img
                                    src="https://www.effy.fr/assets/img/icons/nhp/isolation_hover.svg" alt=""/></div>
                                <div className="option-title"><h6>Pour les Commerciaux</h6></div>
                            </div>
                            <div className="pack-option" onClick={handleRegiesClick}>
                                <div className="option-img"><img
                                    src="https://www.effy.fr/assets/img/icons/nhp/solar_hover.svg" alt=""/></div>
                                <div className="option-title"><h6>Pour les Régies</h6></div>
                            </div>
                        </div>
                        <div className="option-container">
                            <div className="option">
                                <div className="option-details">
                                    <div className="option-desc">
                                        <h3>{content.heading}</h3>
                                        <p>{content.text}</p>
                                        <ul>
                                            {content.benefits.map((benefit, index) => (
                                                <li key={index}>{benefit}</li>
                                            ))}
                                        </ul>
                                        <a href="#">{content.cta}</a>
                                    </div>
                                </div>
                            </div>
                            {/* Répétez la structure de la div "option" si nécessaire */}
                        </div>
                    </div>
                </div>
            </div>

            <section className="accompa">
                <div className="container">
                    <div className="accompa-img">
                        <img
                            src="https://img.freepik.com/photos-gratuite/personnes-travaillant-dans-centre-appels_23-2148094832.jpg?t=st=1719321088~exp=1719324688~hmac=790ad65b56d3521f0f462f0cf91bdcb724d28ea501e4fd0a7afb1dfd3f2d2f3f&w=996"
                            alt=""/>
                    </div>
                    <div className="accompa-content">
                        <div className="accompa-item">
                            <div className="accompa-icon"><img
                                src="https://www.effy.fr/assets/img/backgrounds/icon_argu1.svg" alt=""/></div>
                            <div className="accompa-desc">
                                <h3>Facilité d'utilisation</h3>
                                <p style={{fontSize: '15px'}}>Interface intuitive pour publier et trouver des
                                    annonces </p>
                            </div>
                        </div>
                        <div className="accompa-item">
                            <div className="accompa-icon"><img
                                src="https://www.effy.fr/assets/img/backgrounds/icon_argu4.svg" alt=""/></div>
                            <div className="accompa-desc">
                                <h3>Sécurité et confidentialité</h3>
                                <p style={{fontSize: '15px'}}>Vos données sont protégées et traitées en toute
                                    confidentialité.</p>
                            </div>
                        </div>
                        <div className="accompa-item">
                            <div className="accompa-icon"><img
                                src="https://www.effy.fr/assets/img/backgrounds/icon_argu3.svg" alt=""/></div>
                            <div className="accompa-desc">
                                <h3>Réseau élargi</h3>
                                <p style={{fontSize: '15px'}}>Connectez-vous avec des professionnels et des entreprises
                                    de divers secteurs.</p>
                            </div>
                        </div>
                        <div className="accompa-item">
                            <div className="accompa-icon"><img
                                src="https://www.effy.fr/assets/img/backgrounds/icon_argu2.svg" alt=""/></div>
                            <div className="accompa-desc">
                                <h3>Service rapide et efficace</h3>
                                <p style={{fontSize: '15px'}}>Trouvez rapidement les talents ou les opportunités dont
                                    vous avez besoin.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <h2 style={{textAlign: 'center', marginBottom:'10px'}}> Ce que nos utilisateurs disent de nous</h2>
            <p style={{textAlign: 'center', marginBottom:'20px'}}>Ne prenez pas seulement notre parole pour acquise. Voici ce que nos utilisateurs satisfaits ont à dire sur leur expérience avec MarketLine.</p>
            <section className="testimonials">
                <div className="container">
                    <div className="testimonial col">
                        <p>"Grâce à MarketLine, j'ai pu trouver plusieurs missions de téléprospection en quelques semaines seulement. L'interface est intuitive et j'ai reçu des propositions de qualité." </p> <br/> <b> Sarah M. , Téléprospectrice</b>
                    </div>
                    <div className="testimonial col">
                        <p>"En tant que régie, nous avons trouvé des commerciaux compétents pour certaines de nos missions. La plateforme nous a permis de cibler nos recherches efficacement." </p> <br/> <b> Jean P. , Directeur de Régie </b>
                    </div>
                    <div className="testimonial col">
                        <p>"MarketLine m'a aidé à publier des offres de commercial dans une entreprise de renom. Le processus de publication et d'échange était simple et rapide." </p> <br/> <b> David L. , Commercial</b>
                    </div>
                </div>
            </section>
            <section className="advices">
                <div className="advices__title">
                    <h1>Nos étapes et astuces avec notre <br/> plateforme </h1>
                </div>
                <div className="container">
                    <div className="advice__card">
                        <div className="advice__card__content">
                            <h1>Déposer une annonce</h1>
                            <p>Quels travaux, quelle partie de mon logement, quels impacts… </p>
                            <h4><a href="#">Découvrir les travaux</a></h4>
                        </div>
                    </div>
                    <div className="advice__card">
                        <div className="advice__card__content">
                            <h1>Trouver une offre</h1>
                            <p>Quels travaux, quelle partie de mon logement, quels impacts… </p>
                            <h4><a href="#">Découvrir les travaux</a></h4>
                        </div>
                    </div>
                    <div className="advice__card">
                        <div className="advice__card__content">
                            <h1>Reserver l'offre</h1>
                            <p>Quels travaux, quelle partie de mon logement, quels impacts… </p>
                            <h4><a href="#">Découvrir les travaux</a></h4>
                        </div>
                    </div>
                    <div className="advice__card">
                        <div className="advice__card__content">
                            <h1>Payez</h1>
                            <p>Quels travaux, quelle partie de mon logement, quels impacts… </p>
                            <h4><a href="#">Découvrir les travaux</a></h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
    export default Home;


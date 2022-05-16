import React from "react";


export default function SegundaTela() {

    const [showResults1, setShowResults1] = React.useState(false)
    const [showAnswer, setShowAnswer] = React.useState(false);
    const [vermelho1, setVermelho1] = React.useState(false);
    const [laranja1, setLaranja1] = React.useState(false);
    const [showResults2, setShowResults2] = React.useState(false)
    const [showAnswer1, setShowAnswer1] = React.useState(false);
    const [verde1, setVerde1] = React.useState(false);
    const [vermelho2, setVermelho2] = React.useState(false);
    const [laranja2, setLaranja2] = React.useState(false);
    const [verde2, setVerde2] = React.useState(false);
    const [showAnswer2, setShowAnswer2] = React.useState(false);
    const [showResults3, setShowResults3] = React.useState(false);
    const [vermelho3, setVermelho3] = React.useState(false);
    const [laranja3, setLaranja3] = React.useState(false);
    const [verde3, setVerde3] = React.useState(false);
    const [showAnswer3, setShowAnswer3] = React.useState(false);
    const [showResults4, setShowResults4] = React.useState(false);
    const [vermelho4, setVermelho4] = React.useState(false);
    const [laranja4, setLaranja4] = React.useState(false);
    const [verde4, setVerde4] = React.useState(false);

    const [footervermelho1, setFooterVermelho1] = React.useState(false);
    const [footerverde1, setFooterVerde1] = React.useState(false);
    const [footerlaranja1, setFooterLaranja1] = React.useState(false);

    const [footervermelho2, setFooterVermelho2] = React.useState(false);
    const [footerverde2, setFooterVerde2] = React.useState(false);
    const [footerlaranja2, setFooterLaranja2] = React.useState(false);

    const [footervermelho3, setFooterVermelho3] = React.useState(false);
    const [footerverde3, setFooterVerde3] = React.useState(false);
    const [footerlaranja3, setFooterLaranja3] = React.useState(false);

    const [footervermelho4, setFooterVermelho4] = React.useState(false);
    const [footerverde4, setFooterVerde4] = React.useState(false);
    const [footerlaranja4, setFooterLaranja4] = React.useState(false);




    function shuffleArray(array) {
      
        for (let i = array.length - 1; i > 0; i--) {
        
            // Generate random number
            var j = Math.floor(Math.random() * (i + 1));
                        
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
            
        return array;
     }
    
    





     const avaliacao = [
        { alternativa: "O que é JSX?", name: "Uma extensão de linguagem do JavaScripts" },
        { alternativa: "O React é___", name: "uma biblioteca JavaScript para construção de interfaces" },
        { alternativa: "Componentes devem iniciar com __", name: "letra maiúscula" },
        { alternativa: "Podemos colocar __ dentro do JSX", name: "expressões" },
        { alternativa: "O ReactDOM nos ajuda __", name: "interagindo com a DOM para colocar componentes React na mesma" },
        { alternativa: "Usamos o npm para __", name: "gerenciar os pacotes necessários e suas dependências" },
        { alternativa: "Usamos props para __", name: " passar diferentes informações para componentes " },
        { alternativa: "Usamos estado (state) para __", name: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" },
      ];
    let result = shuffleArray(avaliacao);
    let result1 = result.slice(0,4);
    console.log(result1[0]);

      

    const [contador, setContador] = React.useState(0);
    function increment() {
        setContador(contador + 1);

    }



    return (
        <>
            <div className="segundatela">
                <img src="raio.png" alt="raio" width="136px" height="161px" />
                <h2>Zap Recall</h2>
            </div>
            <div className="primeirapergunta" >
                {verde1 &&
                    <div className="verde1">
                        <h2>Pergunta 1</h2>
                        <img src="nike.png" alt="verde1" />
                    </div>
                }
                {laranja1 &&
                    <div className="laranja1">
                        <h2>Pergunta 1</h2>
                        <img src="interrog.png" alt="vermelho1" />
                    </div>
                }
                {vermelho1 &&
                    <div className="vermelho1">
                        <h2>Pergunta 1</h2>
                        <img src="xis.png" alt="vermelho1" />
                    </div>}
                {showAnswer &&
                    <div style={{ display: vermelho1 || laranja1 || verde1 ? "none" : "" }} className="answer1">
                        <h2>{result1[0].name}</h2>
                        <div className="alternatives1">
                            <span onClick={() => { setVermelho1(!vermelho1); increment(); setFooterVermelho1(!footervermelho1) }} >Não lembrei</span>
                            <span onClick={() => { setLaranja1(!laranja1); increment(); setFooterLaranja1(!footerlaranja1) }}>Quase não lembrei</span>
                            <span onClick={() => { setVerde1(!verde1); increment(); setFooterVerde1(!footerverde1) }}>Zap!</span>
                        </div>
                    </div>
                }
                {showResults1 &&
                    <div style={{ display: showAnswer ? "none" : "" }} className="result1">
                        <h2>{result1[0].alternativa}</h2>
                        <img src="virar.png" alt="virar" onClick={() => setShowAnswer(!showAnswer)} />
                    </div>}

                <div style={{ display: showResults1 ? "none" : "" }} className="pergunta1" >
                    <h2>Pergunta 1</h2>
                    <img src="vector.png" alt="setinha1" onClick={() => setShowResults1(!showResults1)} />

                </div>



                {verde2 &&
                    <div className="verde2">
                        <h2>Pergunta 2</h2>
                        <img src="nike.png" alt="verde2" />
                    </div>
                }
                {laranja2 &&
                    <div className="laranja2">
                        <h2>Pergunta 2</h2>
                        <img src="interrog.png" alt="laranja2" />
                    </div>
                }
                {vermelho2 &&
                    <div className="vermelho2">
                        <h2>Pergunta 2</h2>
                        <img src="xis.png" alt="vermelho2" />
                    </div>}
                {showAnswer1 &&
                    <div style={{ display: vermelho2 || laranja2 || verde2 ? "none" : "" }} className="answer2">
                        <h2>{result1[0].name}</h2>
                        <div className="alternatives2">
                            <span onClick={() => { setVermelho2(!vermelho2); increment(); setFooterVermelho2(!footervermelho2) }}>Não lembrei</span>
                            <span onClick={() => { setLaranja2(!laranja2); increment(); setFooterLaranja2(!footerlaranja2) }}>Quase não lembrei</span>
                            <span onClick={() => { setVerde2(!verde2); increment(); setFooterVerde2(!footerverde2) }}>Zap</span>
                        </div>
                    </div>
                }
                {showResults2 &&
                    <div style={{ display: showAnswer1 ? "none" : "" }} className="result2">
                        <h2>{result1[0].alternativa}</h2>
                        <img src="virar.png" alt="virar" onClick={() => setShowAnswer1(!showAnswer1)} />
                    </div>}

                <div style={{ display: showResults2 ? "none" : "" }} className="pergunta2" >
                    <h2>Pergunta 2</h2>
                    <img src="vector.png" alt="setinha2" onClick={() => setShowResults2(!showResults2)} />

                </div>



                {verde3 &&
                    <div className="verde3">
                        <h2>Pergunta 3</h2>
                        <img src="nike.png" alt="verde3" />
                    </div>
                }
                {laranja3 &&
                    <div className="laranja3">
                        <h2>Pergunta 3</h2>
                        <img src="interrog.png" alt="laranja3" />
                    </div>
                }
                {vermelho3 &&
                    <div className="vermelho3">
                        <h2>Pergunta 3</h2>
                        <img src="xis.png" alt="vermelho3" />
                    </div>}
                {showAnswer2 &&
                    <div style={{ display: vermelho3 || laranja3 || verde3 ? "none" : "" }} className="answer3">
                        <h2>{result1[0].name}</h2>
                        <div className="alternatives3">
                            <span onClick={() => { setVermelho3(!vermelho3); increment(); setFooterVermelho3(!footervermelho3) }}>Não lembrei</span>
                            <span onClick={() => { setLaranja3(!laranja3); increment(); setFooterLaranja3(!footerlaranja3) }}>Qause não lembrei</span>
                            <span onClick={() => { setVerde3(!verde3); increment(); setFooterVerde3(!footerverde3) }}>Zap!</span>
                        </div>
                    </div>
                }
                {showResults3 &&
                    <div style={{ display: showAnswer2 ? "none" : "" }} className="result3">
                        <h2>{result1[0].alternativa}</h2>
                        <img src="virar.png" alt="virar" onClick={() => setShowAnswer2(!showAnswer2)} />
                    </div>}

                <div style={{ display: showResults3 ? "none" : "" }} className="pergunta3" >
                    <h2>Pergunta 3</h2>
                    <img src="vector.png" alt="setinha3" onClick={() => setShowResults3(!showResults3)} />

                </div>




                {verde4 &&
                    <div className="verde4">
                        <h2>Pergunta 4</h2>
                        <img src="nike.png" alt="verde4" />
                    </div>
                }
                {laranja4 &&
                    <div className="laranja4">
                        <h2>Pergunta 4</h2>
                        <img src="interrog.png" alt="laranja4" />
                    </div>
                }
                {vermelho4 &&
                    <div className="vermelho4">
                        <h2>Pergunta 4</h2>
                        <img src="xis.png" alt="vermelho4" />
                    </div>}
                {showAnswer3 &&
                    <div style={{ display: vermelho4 || laranja4 || verde4 ? "none" : "" }} className="answer4">
                        <h2>{result1[0].name}</h2>
                        <div className="alternatives4">
                            <span onClick={() => { setVermelho4(!vermelho4); increment(); setFooterVermelho4(!footervermelho4) }}>Não lembrei</span>
                            <span onClick={() => { setLaranja4(!laranja4); increment(); setFooterLaranja4(!footerlaranja4) }}>Quase não lembrei</span>
                            <span onClick={() => { setVerde4(!verde4); increment(); setFooterVerde4(!footerverde4) }}>Zap!</span>
                        </div>
                    </div>
                }
                {showResults4 &&
                    <div style={{ display: showAnswer3 ? "none" : "" }} className="result4">
                        <h2>{result1[0].alternativa}</h2>
                        <img src="virar.png" alt="virar" onClick={() => setShowAnswer3(!showAnswer3)} />
                    </div>}

                <div style={{ display: showResults4 ? "none" : "" }} className="pergunta4" >
                    <h2>Pergunta 4</h2>
                    <img src="vector.png" alt="setinha4" onClick={() => setShowResults4(!showResults4)} />

                </div>

            </div>

            <div className="footer">
                {contador === 4 && (footervermelho1 || footervermelho2 || footervermelho3 || footervermelho4) ?
                                      
                    <div className="footer" style={{ height: 170 }}>
                        <div className="resultado2"  >
                        <h2>Putz ...</h2>
                        <img src="sad.png" alt="parabens"/>
                    </div>
                    <div className="texto1">
                        <h2>Ainda faltam alguns... mas não desanime</h2>
                    </div>
                        <h2>{contador}/4 CONCLUÍDO</h2>
                        <div className="retorno">
                            {footervermelho1 &&
                                <div className="footervermelho">
                                    <img src="xis.png" alt="footervermelho" />
                                </div>
                            }

                            {footerverde1 &&
                                <div className="footerverde">
                                    <img src="nike.png" alt="footerverde" />
                                </div>
                            }

                            {footerlaranja1 &&
                                <div className="footerlaranja">
                                    <img src="interrog.png" alt="footerlaranja" />
                                </div>
                            }

                            {footervermelho2 &&
                                <div className="footervermelho">
                                    <img src="xis.png" alt="footervermelho" />
                                </div>
                            }

                            {footerverde2 &&
                                <div className="footerverde">
                                    <img src="nike.png" alt="footerverde" />
                                </div>
                            }

                            {footerlaranja2 &&
                                <div className="footerlaranja">
                                    <img src="interrog.png" alt="footerlaranja" />
                                </div>
                            }

                            {footervermelho3 &&
                                <div className="footervermelho">
                                    <img src="xis.png" alt="footervermelho" />
                                </div>
                            }

                            {footerverde3 &&
                                <div className="footerverde">
                                    <img src="nike.png" alt="footerverde" />
                                </div>
                            }

                            {footerlaranja3 &&
                                <div className="footerlaranja">
                                    <img src="interrog.png" alt="footerlaranja" />
                                </div>
                            }

                            {footervermelho4 &&
                                <div className="footervermelho">
                                    <img src="xis.png" alt="footervermelho" />
                                </div>
                            }

                            {footerverde4 &&
                                <div className="footerverde">
                                    <img src="nike.png" alt="footerverde" />
                                </div>
                            }

                            {footerlaranja4 &&
                                <div className="footerlaranja">
                                    <img src="interrog.png" alt="footerlaranja" />
                                </div>

                            }
                        </div>
                    </div>
                    : null
                }
                {contador === 4 && !(footervermelho1 || footervermelho2 || footervermelho3 || footervermelho4) ?
                    <div className="footer" style={{ height: 170 }}>
                    <div className="resultado2"  >
                        <h2>Parabéns</h2>
                        <img src="party.png" alt="parabens"/>
                    </div>
                    <div className="texto1">
                        <h2>Você não esqueceu de nenhum flashcard</h2>
                    </div>
                    <h2>{contador}/4 CONCLUÍDO</h2>
                    <div className="retorno">
                        {footervermelho1 &&
                            <div className="footervermelho">
                                <img src="xis.png" alt="footervermelho" />
                            </div>
                        }

                        {footerverde1 &&
                            <div className="footerverde">
                                <img src="nike.png" alt="footerverde" />
                            </div>
                        }

                        {footerlaranja1 &&
                            <div className="footerlaranja">
                                <img src="interrog.png" alt="footerlaranja" />
                            </div>
                        }

                        {footervermelho2 &&
                            <div className="footervermelho">
                                <img src="xis.png" alt="footervermelho" />
                            </div>
                        }

                        {footerverde2 &&
                            <div className="footerverde">
                                <img src="nike.png" alt="footerverde" />
                            </div>
                        }

                        {footerlaranja2 &&
                            <div className="footerlaranja">
                                <img src="interrog.png" alt="footerlaranja" />
                            </div>
                        }

                        {footervermelho3 &&
                            <div className="footervermelho">
                                <img src="xis.png" alt="footervermelho" />
                            </div>
                        }

                        {footerverde3 &&
                            <div className="footerverde">
                                <img src="nike.png" alt="footerverde" />
                            </div>
                        }

                        {footerlaranja3 &&
                            <div className="footerlaranja">
                                <img src="interrog.png" alt="footerlaranja" />
                            </div>
                        }

                        {footervermelho4 &&
                            <div className="footervermelho">
                                <img src="xis.png" alt="footervermelho" />
                            </div>
                        }

                        {footerverde4 &&
                            <div className="footerverde">
                                <img src="nike.png" alt="footerverde" />
                            </div>
                        }

                        {footerlaranja4 &&
                            <div className="footerlaranja">
                                <img src="interrog.png" alt="footerlaranja" />
                            </div>

                        }
                    </div>
                </div>
                    
                    : null
                }


                <h2>{contador}/4 CONCLUÍDO</h2>
                <div className="retorno">
                    {footervermelho1 &&
                        <div className="footervermelho">
                            <img src="xis.png" alt="footervermelho" />
                        </div>
                    }

                    {footerverde1 &&
                        <div className="footerverde">
                            <img src="nike.png" alt="footerverde" />
                        </div>
                    }

                    {footerlaranja1 &&
                        <div className="footerlaranja">
                            <img src="interrog.png" alt="footerlaranja" />
                        </div>
                    }

                    {footervermelho2 &&
                        <div className="footervermelho">
                            <img src="xis.png" alt="footervermelho" />
                        </div>
                    }

                    {footerverde2 &&
                        <div className="footerverde">
                            <img src="nike.png" alt="footerverde" />
                        </div>
                    }

                    {footerlaranja2 &&
                        <div className="footerlaranja">
                            <img src="interrog.png" alt="footerlaranja" />
                        </div>
                    }

                    {footervermelho3 &&
                        <div className="footervermelho">
                            <img src="xis.png" alt="footervermelho" />
                        </div>
                    }

                    {footerverde3 &&
                        <div className="footerverde">
                            <img src="nike.png" alt="footerverde" />
                        </div>
                    }

                    {footerlaranja3 &&
                        <div className="footerlaranja">
                            <img src="interrog.png" alt="footerlaranja" />
                        </div>
                    }

                    {footervermelho4 &&
                        <div className="footervermelho">
                            <img src="xis.png" alt="footervermelho" />
                        </div>
                    }

                    {footerverde4 &&
                        <div className="footerverde">
                            <img src="nike.png" alt="footerverde" />
                        </div>
                    }

                    {footerlaranja4 &&
                        <div className="footerlaranja">
                            <img src="interrog.png" alt="footerlaranja" />
                        </div>

                    }
                </div>
            </div>

        </>
    )
}







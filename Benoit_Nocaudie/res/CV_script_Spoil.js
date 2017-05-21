
/* -------------------------------------------- */
	/* 
		scripts pour CV
				pour Spoil/despoil expériences
	*/
/* -------------------------------------------- */


	/* Classe spoil despoil */
	
		function CSpoil()
		{
			/* données membre (private) */		// (public :) this.m_Toto;
			
					// récupération des buttons spoil/despoil
					
				var m_Contenu_01 = document.getElementById("Formations");
					var m_Despoil_01 = document.getElementById("jsFormations_Open_button");
					var m_Spoil_01 = document.getElementById("jsFormations_Close_button");
					
				var m_Contenu_02 = document.getElementById("Jobs");
					var m_Despoil_02 = document.getElementById("jsJobs_Open_button");
					var m_Spoil_02 = document.getElementById("jsJobs_Close_button");
					
				var m_Contenu_03 = document.getElementById("Stages");
					var m_Despoil_03 = document.getElementById("jsStages_Open_button");
					var m_Spoil_03 = document.getElementById("jsStages_Close_button");
					
				var m_Contenu_04 = document.getElementById("Associatif");
					var m_Despoil_04 = document.getElementById("jsAssociatif_Open_button");
					var m_Spoil_04 = document.getElementById("jsAssociatif_Close_button");
					
				var m_Contenu_05 = document.getElementById("Prog");
					var m_Despoil_05 = document.getElementById("jsProg_Open_button");
					var m_Spoil_05 = document.getElementById("jsProg_Close_button");
					
				var m_Contenu_06 = document.getElementById("DeveloppementWeb");
					var m_Despoil_06 = document.getElementById("jsDeveloppementWeb_Open_button");
					var m_Spoil_06 = document.getElementById("jsDeveloppementWeb_Close_button");
					
				var m_Contenu_07 = document.getElementById("Automatique");
					var m_Despoil_07 = document.getElementById("jsAutomatique_Open_button");
					var m_Spoil_07 = document.getElementById("jsAutomatique_Close_button");
					
				var m_Contenu_08 = document.getElementById("Competences");
					var m_Despoil_08 = document.getElementById("jsCompetences_Open_button");
					var m_Spoil_08 = document.getElementById("jsCompetences_Close_button");
					
				var m_Contenu_09 = document.getElementById("Divers");
					var m_Despoil_09 = document.getElementById("jsDivers_Open_button");
					var m_Spoil_09 = document.getElementById("jsDivers_Close_button");
					
			/* ---------- ---------- */
			
	
			/* fonctions membres (.h) */	// (public)
			
				// Spoil/Despoil des section expériences
				
					this.Spoil_Despoil = Spoil_Despoil;
					this.Contenu_Chosen = Contenu_Chosen;
			
			/* ---------- ---------- */
	
	
			/* fonctions membres (.cpp) */
			
				/* Spoil/Despoil des section expériences */
				
					function Spoil_Despoil(Contenu, bSpoil)
					{
						if(bSpoil == true)
						{
							Contenu.style.display = "none";
						}
						else	// (bSpoil == false)	// else if{...} else{alerte} ?
						{
							if(Contenu.style.display == "block")	// click sur "exp", mais contenu déjà affiché
							{
								Contenu.style.display = "none";
							}
							else	// (Contenu.style.display == "none") click sur "exp", mais contenu déjà affiché
							{
								Contenu.style.display = "block";
							}
						}
					}
					
					function Contenu_Chosen()
					{
						var bSpoil;
						var Contenu;
						
						switch(this)	// récupère le contenu lié au bouton
						{
							case m_Despoil_01 :
								Contenu = m_Contenu_01;
								bSpoil = false;
								break;
							case m_Spoil_01 :
								Contenu = m_Contenu_01;
								bSpoil = true;
								break;
								
							case m_Despoil_02 :
								Contenu = m_Contenu_02;
								bSpoil = false;
								break;
							case m_Spoil_02 :
								Contenu = m_Contenu_02;
								bSpoil = true;
								break;
								
							case m_Despoil_03 :
								Contenu = m_Contenu_03;
								bSpoil = false;
								break;
							case m_Spoil_03 :
								Contenu = m_Contenu_03;
								bSpoil = true;
								break;
								
							case m_Despoil_04 :
								Contenu = m_Contenu_04;
								bSpoil = false;
								break;
							case m_Spoil_04 :
								Contenu = m_Contenu_04;
								bSpoil = true;
								break;
								
							case m_Despoil_05 :
								Contenu = m_Contenu_05;
								bSpoil = false;
								break;
							case m_Spoil_05 :
								Contenu = m_Contenu_05;
								bSpoil = true;
								break;
								
							case m_Despoil_06 :
								Contenu = m_Contenu_06;
								bSpoil = false;
								break;
							case m_Spoil_06 :
								Contenu = m_Contenu_06;
								bSpoil = true;
								break;
								
							case m_Despoil_07 :
								Contenu = m_Contenu_07;
								bSpoil = false;
								break;
							case m_Spoil_07 :
								Contenu = m_Contenu_07;
								bSpoil = true;
								break;
								
							case m_Despoil_08 :
								Contenu = m_Contenu_08;
								bSpoil = false;
								break;
							case m_Spoil_08 :
								Contenu = m_Contenu_08;
								bSpoil = true;
								break;
								
							case m_Despoil_09 :
								Contenu = m_Contenu_09;
								bSpoil = false;
								break;
							case m_Spoil_09 :
								Contenu = m_Contenu_09;
								bSpoil = true;
								break;
						}
						
						Spoil_Despoil(Contenu, bSpoil);		// cache ou affiche le contenu lié au bouton
					}
			
				/* ---------- */
					
			/* ---------- ---------- */
		
		}
		
	/* -------------------------------------------- */
	
	
		
	/* Main() */
	
		// initialisation
		
			spoil = new CSpoil();
			
			
		// réception des DOM events
		
				// Clickage sur Spoil/Despoil
				
			document.getElementById("jsFormations_Open_button").addEventListener("click", spoil.Contenu_Chosen, false);
				document.getElementById("jsFormations_Close_button").addEventListener("click", spoil.Contenu_Chosen, false);
				
			document.getElementById("jsJobs_Open_button").addEventListener("click", spoil.Contenu_Chosen, false);
				document.getElementById("jsJobs_Close_button").addEventListener("click", spoil.Contenu_Chosen, false);
				
			document.getElementById("jsStages_Open_button").addEventListener("click", spoil.Contenu_Chosen, false);
				document.getElementById("jsStages_Close_button").addEventListener("click", spoil.Contenu_Chosen, false);
				
			document.getElementById("jsAssociatif_Open_button").addEventListener("click", spoil.Contenu_Chosen, false);
				document.getElementById("jsAssociatif_Close_button").addEventListener("click", spoil.Contenu_Chosen, false);
				
			document.getElementById("jsProg_Open_button").addEventListener("click", spoil.Contenu_Chosen, false);
				document.getElementById("jsProg_Close_button").addEventListener("click", spoil.Contenu_Chosen, false);
				
			document.getElementById("jsDeveloppementWeb_Open_button").addEventListener("click", spoil.Contenu_Chosen, false);
				document.getElementById("jsDeveloppementWeb_Close_button").addEventListener("click", spoil.Contenu_Chosen, false);
				
			document.getElementById("jsAutomatique_Open_button").addEventListener("click", spoil.Contenu_Chosen, false);
				document.getElementById("jsAutomatique_Close_button").addEventListener("click", spoil.Contenu_Chosen, false);
				
			document.getElementById("jsCompetences_Open_button").addEventListener("click", spoil.Contenu_Chosen, false);
				document.getElementById("jsCompetences_Close_button").addEventListener("click", spoil.Contenu_Chosen, false);
				
			document.getElementById("jsDivers_Open_button").addEventListener("click", spoil.Contenu_Chosen, false);
				document.getElementById("jsDivers_Close_button").addEventListener("click", spoil.Contenu_Chosen, false);
			
	
	/* -------------------------------------------- */

		
/* -------------------------------------------- */
	/*
	*/
/* -------------------------------------------- */
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
<template>
  <v-main>
    <navigation-drawer />
    <navigation-menu />
    <section-head :light="true" />
    <v-container>
      <v-row>
        <v-col>
          <h2 class="text-h3 mt-6">
            Conditions générales de vente
          </h2>
          <h3 class="text-h5 my-6">
            Article 1 : Description du service
          </h3>
          <p>
            Hélène Cabillic fournit une prestation de correction sur mesure à destination des particuliers et des
            professionnels. Toutes les corrections incluent la révision de l’orthographe, de la grammaire, de la
            conjugaison, de la syntaxe et de la typographie. La correction approfondie inclut en outre une
            reformulation des passages maladroits et une vérification et correction éventuelle d’éléments factuels
            (noms propres, dates, géographie...).
          </p>
          <h3 class="text-h5 my-6">
            Article 2 : Prix
          </h3>
          <p>
            Les tarifs annoncés sur le présent site internet le sont à titre indicatif et chaque commande fait l’objet d’un
            devis personnalisé. Les prix dépendent du volume à corriger (tarifs dégressifs), du type de client
            (particulier / professionnel / étudiant), du type de document à corriger et des exigences du client.
            TVA non applicable, article 293 B du Code général des impôts.
          </p>
          <h3 class="text-h5 my-6">
            Article 3 : Modalités de commande
          </h3>
          <p>
            Après un échange entre la prestataire et le client, un devis (comprenant le tarif et un délai de livraison
            indicatif) est envoyé à celui-ci. Le montant indiqué sur le devis est valable deux semaines.
          </p>
          <p>
            La commande est considérée comme ferme quand la prestataire reçoit acceptation de l’offre par le client
            (devis signé ou e-mail), le règlement complet ou l’acompte prévu dans le devis. La commande débutera à
            partir du moment où ces éléments et les pièces nécessaires à la prestation auront été fournis à la
            prestataire.
          </p>
          <p>
            L’acceptation de l’offre par le client implique acceptation du tarif, du délai de livraison et des conditions
            générales de ventes.
          </p>
          <h3 class="text-h5 my-6">
            Article 4 : Facturation et paiement
          </h3>
          <p>
            Le paiement du solde est demandé avant l’exécution de la prestation pour toute facture de 60 euros et
            moins. Au-delà de cette somme, un acompte de 30 % du devis sera versé avant l’exécution de la
            prestation, le solde sera à régler à la livraison, dans un délai de 5 jours. Une fois le délai passé, des
            pénalités de 5 % du prix total par jour de retard seront appliquées.
          </p>
          <p>
            Le règlement peut s’effectuer par virement ou par PayPal.
          </p>
          <h3 class="text-h5 my-6">
            Article 5 : Délai de livraison
          </h3>
          <p>
            Le début de la prestation commence à réception du règlement de l’acompte ou du total de la facture (cf.
            article 4) et des documents nécessaires à sa réalisation. Le délai de livraison varie en fonction de la
            prestation à accomplir et est indiqué sur le devis.
          </p>
          <p>
            La prestataire s’engage à observer le délai de livraison prévu, sauf en cas de force majeure. La force
            majeure est un événement imprévisible et échappant à la volonté de la prestataire : maladie,
            hospitalisation de la prestataire ou un de ses proches, décès de la prestataire ou un de ses proches, panne
            de courant de longue durée... Cette liste n’est pas exhaustive.
          </p>
          <p>
            Le client s’engage à confirmer par e-mail de la bonne réception de la livraison. Il dispose d’un délai de
            3 jours après livraison pour relire le texte et demander une révision à la prestataire.
          </p>
          <h3 class="text-h5 my-6">
            Article 6 : Confidentialité
          </h3>
          <p>
            La prestataire garantit ne pas divulguer à qui que ce soit les coordonnées de ses clients ou le contenu des
            documents que ceux-ci lui confient à la correction.
          </p>
          <p>
            Les documents corrigés seront conservés 3 mois après livraison, puis supprimés définitivement.
          </p>
          <h3 class="text-h5 my-6">
            Article 7 : Annulation de commande
          </h3>
          <h4 class="text-h6">
            Annulation par le client :
          </h4>
          <p>
            Toute annulation par le client doit se faire par e-mail.
            Les sommes déjà versées sont dues. La prestataire s’engage cependant à les rembourser au cas où elle n’a
            pas commencé le travail de correction.
          </p>
          <p>
            Si la prestation a déjà commencé, le client doit payer la somme équivalant au travail déjà réalisé, une
            facture correspondant à la nouvelle somme due sera alors éditée.
          </p>
          <h4 class="text-h6">
            Annulation par la prestataire :
          </h4>
          <p>
            La prestataire se réserve le droit d’annuler la commande si les documents fournis sont impossibles à
            corriger, si leur contenu est contraire à la loi ou s’ils ont été plagiés. Dans ce cas, les sommes déjà versées
            seront remboursées.
          </p>
          <p>
            Si la prestataire annule la commande en invoquant la force majeure, les sommes déjà versées sont dues.
          </p>
          <h3 class="text-h5 my-6">
            Article 8 : Litiges
          </h3>
          <p>
            Le client dispose d’un délai de 3 jours après livraison pour relire le texte et demander une révision à la
            prestataire.
          </p>
          <p>
            Tout litige qui n’aurait pas fait l’objet d’un règlement à l’amiable entre le client et la prestataire sera
            soumis au tribunal de Vannes.
          </p>
          <h3 class="text-h5 my-6">
            Article 9 : Révision et mise à jour des CGV
          </h3>
          <p>
            La prestataire se réserve le droit de mettre à jour les conditions générales de vente quand elle le pense
            nécessaire.
          </p>
          <p class="text-caption mt-16">
            CGV mises à jour le 18 décembre 2021
          </p>
        </v-col>
      </v-row>
    </v-container>
    <section-footer />
  </v-main>
</template>

<script>
export default {
  head: {
    title: 'CGV',
    meta: [
      { name: 'robots', content: 'noindex' }
    ]
  }
}
</script>

<style>

</style>

<template lang="pug">
  .social-links
    a(:href="$t('content.urls.facebook')" target="_blank"):  icon(type="icon--facebook")
    a(:href="$t('content.urls.linkedin')" target="_blank"):  icon(type="icon--linkedin")
    a(:href="$t('content.urls.dribbble')" target="_blank"):  icon(type="icon--dribble")
    a(:href="$t('content.urls.behance')" target="_blank"):   icon(type="icon--behance")
    a(:href="$t('content.urls.instagram')" target="_blank"): icon(type="icon--instagram")
    a(:href="$t('content.urls.github')" target="_blank"):    icon(type="icon--github")
</template>

<style src="./SocialLinks.sass" lang="sass" scoped></style>

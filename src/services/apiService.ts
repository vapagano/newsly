const key: string = 'e28105562fmsh01edebafeeb6117p1f37e7jsn0221a314ae3d';
const host: string = 'contextualwebsearch-websearch-v1.p.rapidapi.com';
const bearer: string = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjdXBhLWF1dGgiLCJhdWQiOiJjdXBhLWFwaSIsInN1YiI6NywiZXhwIjoxNjE3Mzg4NzU1LCJyb2xlIjoyMSwiZ3JvdXAiOjIsInN1Ymdyb3VwIjoxMywic3VwcGxpZXIiOm51bGwsIm5hbWUiOiJBcmFjZWxpIEJ1aXMiLCJlbWFpbCI6IkFyYWNlbGkuQnVpc0BpYm0uY29tIiwiZGFzaGJvYXJkIjoiNCIsImlhdCI6MTYxNzMwMjM1NX0.N-bYhMlkeNmkDnyp04FNVC1QbfQq3VI528SRenujUaZs-hjJXJV0AZPIpbuojfBbtHMNTE3huA8KG9q7iuKP0Ef3vMOflqvFwOd84Z0fkcrwymPqWHGdc6-eJC1_WuX9LC9EukJVh6A1UkeJsIMlJ4u97fuG6s3n08Me_8t9ux9i1b8bWMwIxM32bIN8a4GYXafSAOm1ubcxLs9vAs6ZESIGniYk8npp5ojdwQ2SxxzuIfrz__0ST4GxTVe_T83LXeXpE8L9xAI967lebopDKJKULSHQnasTtDU_Wr95yjPrRbwqK4solhNNKlPHRCmyWXdG2HBM8xwSXP3MCvATflRlUF1m-NrPmb90VO0V7UY_sawcRTpSzFchN04yJLDu0UZM2hVR-mJpj_SPMAuWePWdkFy-G3SthnH3PArp8vQ-mad4Xw8EAhNLdc3hMPyz0GdBaleXKYT26_vfQ31IkrVVdX5oIt0d9b8G_LkePu7UkQmLzH3ye1IQDz6ZO-cw';

export const getNewsHeaders = () => {

  return {
    'x-rapidapi-key': key, 
    'x-rapidapi-host': host, 
    'Authorization': `Bearer ${bearer}`
  };

};

import React from 'react'
import Coverflow from 'react-coverflow'
import { Terminus } from '../../Terminus/Terminus'

export function Arcade() {

  function Covers() {
    return (
      <Coverflow
        width={"auto"}
        height={480}
        displayQuantityOfSide={2}
        navigation={false}
        enableHeading={false}
      >
        <div
          onClick={() => {}}
          onKeyDown={() => {}}
          role="menuitem"
          tabIndex="0"
        >
          <img
            src='https://lh3.googleusercontent.com/d7oMyl87Om2yDlY_DPQlVghPRyJJ8hNkbDVy6GQluDzUgfb2BN7xf_2ATDalYYtLcAymhT0JG0bwot1v1PJ6J5rVc3bmGl8OHLmmJuEzjHvhglTXEClKpjJu8-3nouYforo6-Mi-yPPVRgSL6XALMGEVuWa8_JR6l6kVL7gat8vJvbBeH9snuDGK68gNaGuEQjdjHl20j4hYNPxHOeks92TC4Zqz6n4-aOwnGD3SJj-bygA8dToI54DCvDRTN-GAadpqWfqC-HmT6bwPTVux6yT7XSANlGEWRlYBlIWd4F6EPdV5Y8BiMObBzd6Qy62LRLIvvHnyC9-uLiiQsUpFIpPhqQqORvkq_bDS6tk7QEC7CyvGfWmz9JeNR3iLW2Y2tUo2pNddB3yiYnUcjH2GU6iWPOepryvWeXa5Lk9Ja2qqtb6KZsMqL8OJHKOxv9LkQoCAhYj3kYaQ2huUTIl015bKOQkad5B9s4BJGfIX1VeQzfbOhpNUgHQ9Nq0B6RIZ-4mQt4KDk-6pjuRV8rvYbXLNNcEAI7BmlhCCdh6nVc2jkPIb7BHyDGSTK7Bhm9DqBkB3Y1J7xXGuoF-49JMJlt_TfV5zz1d6Iw7tlDqve45l5UVb7IAbKG_10Z-oJp0-wI0qB8_pN8sSdiqe7YcwRFkTO4vw6pu1rNgfM3Z_iyzuNLshJKtNPkreprDMwA'
            alt='title or description'
            style={{ display: 'block', width: '100%' }}
          />
        </div>
        <img src='https://lh3.googleusercontent.com/nO7QVdqIvdaYETvWuI9xLXmyCgB-bvLhEdH7_7MhcTafOK7GaJbxkzW6JpDF5eudqcmMYc0SSNJUKmdk4CnUdlrGZEx_vcPkKLLSOmHtiy8vKGpHRb19b96s3HlJcrVpchnVvBiBHEkspCUbd-r4mYIIIhp1Bx_kPfRzO5Ra0KtQgwTOUuMXCCh8VhXl5FIL0bJGY8ResXdOFBSamH1AXcV3vPatinJUgpXrLpQ_iVvaAldu6F3SBD9rRyYroCtYm46b-1brfP1pL2UFUExfxZZD9jot0SmSAj4pOEXjCDdrxyXdMoC9TAlCqntlxEoxp461ZyrqHJgpsqdP04f85a74UEeNyug7Gqi3F_iILMC5WlOCJiBGoHHtzUwHCermbiiePPY1PAl8yH6nxeto2qI7G09patM47AbTLZwMxuqMvALYnUpTzImktZeMot3VhNEstwpU6OHntVv2n3AxBFPCsLc3T0SUCe2PSOAzqcORhoGUjazwZcn7XejSDCSCZPYWQ2NUUwzIzSYQDR6ySsKeDul9NQuLvlONsicvGkrEJUY78644Ir9Vfb1TDTTyQmArX36Ct0YN8tXl1Xa9vYduLDxqvI0r3NcrZA43X_xEHMX2O_kpWGPQZis_IWEtjy7OWVihvpIdXH5Nt6jFyZA8th6Bvm9N_rgXW7PM0bRQJH3gDQ-_iOAXgSlZYw' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
        <img src='https://lh3.googleusercontent.com/pbsWRdppabyy4FYjloozkkpoUV0gYOpDzp8oxvqS5qL7CBhxt2lLHZ_qrtFXx-gdRdXtvN_aNc0mFWzHZhEKKnhPweh0pmo5aTJIK9ivTsbbagbEsHZ-C3AGUsksvU272T-AI9zzQB7bXlBFX50MbGz9f_ayZUTFCpk3WxLEgpaS9-VN6mHbH7ED1gyAUv5ZC2IZ3TairGtnS9kXeZ78tYqA7JurdDLV9H8zdF0llVuzuezlogapWKnPdfFAXzdjxWGxJtJGn6cfgsGu8Wvn1BDM0QGY9k5hmlgRvg9rLUnIsc_K7-hdGa5j14yCFEjjeYt4SoFN8yF7Vg5IKdFiLSjdFF4AbiCjQ0YS9ohBdW3bNct626N_0KlIwnjJJAvYEjh9yyvtEpyrXOdyHyc6pKer5DgoGxzOTSkCLXB5eMiuPY3d6Wf0kA9gLXSL1usVCZOhKi1L0covzYUDCl0n05QDXe_w0b1dVTEW0wZZMlxEtppgxyFsdDCyXX7-u9i6TfwXBh85YmCK1wwXX1KYEd4XDfZ6aHae0NwwkJYIcY3H_tNMRP4PS5nVx4JYH_jcqMysYjav0HQTgdeMM3dZ5iOJkztjnE7k-_ubYHFQrbZfy_RcEvc7k4JkBolP8W7r0Vtx3mNRTrInqNSFzdk8-8cJrBTA7IhH5Kz6Ceq4sqg6mBzcKi1_5t0mjUNRGw' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
      </Coverflow>
    )
  }
  
  return (<><Terminus children={<><Covers/></>} /></>)
}
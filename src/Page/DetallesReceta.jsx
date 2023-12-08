const DetallesReceta = () => {
    const goBack = () => {
        window.history.back();
      };
    
    return (
       <>
        <div
        className="flex justify-center items-center h-screen"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/fotos-premium/ingredientes-hornear-sobre-fondo-madera-oscura-vacia-colocar-texto-o-recetas-vista-superior_124507-6776.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-green-400 bg-opacity-50 absolute inset-0"></div>
        <button
          className="absolute top-4 left-4 bg-green-500 text-white p-6 shadow-lg rounded-full hover:bg-green-600 hover:scale-105 transition duration-300 ease-in-out z-10"
          onClick={goBack}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <div className="w-1/2 max-w-md z-10 relative">
        <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhUYGBgZGRoYHBoYHBoZGBoYGBgaGRocGhgcIS4lHB4rHxoYJzgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISGjQhJSs0NDQ0MTQ0NDE0NDQ0NDQ0NDQ0NDQ2NDQ0NDQ0NDQ0NDQ0NzQ0NDQ0NDE0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA+EAACAQIDBQUGBAQFBQEAAAABAgADEQQSIQUxQVFhBiJxgZETMqGxwfAHQlLRFHKS4RVissLxIzNjgqJT/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EACoRAAICAQMDAgYDAQAAAAAAAAABAhEDEiExBEFRInETYYGRoeEUUtEy/9oADAMBAAIRAxEAPwDmgMBissUAJZiJW8cWJ8ouAxXtJY7H2W2IfKDlRdXbflHTqeEqyZ0vsZs7NhEyC7OzM3kxUX8hCwSKusoRPZ0lyJxt7zdXbifhIVPCu+iKzfygmdNwXZmknecB25H3B5cfOW64dQAAAo4WAAk2aKJxw7FrndSa3XT5xD7Er29yw6kTpu22poAGJBvcaG3rM5WqAuAWubcBrbwnn5+t+FLSlZ3Yek1xUm6Ml/g1Uamm1uYF/lJOCzJcAXU6Mh1UjkVM1L4oropBNrg8+ktcAiV0/wCogJ/VoGHgRLwdXHI0nsyc3SygtS3RzLbGzvZkMoIRxcdOkrJ0Ttns4JRsDfivPffUeAPrOfKJ6UXaPNmqYFSGojoMPLGZ2NmEYo2ib9IDEmN+zJjovFKOcAEilG3S0fiGjYkxoHrOtfhZgsmGapbWpUJH8qdwfEN6zlIW/DWd87PYL2OGpU/0IoP81rt8bzOT2Nca3LMmJvAYljM7Ngy0KIzQZoAKhhYQaOLAA0EcCwLFCAAyzl34y4fu4Z+TVE/qCsP9JnUZhPxew2bAh+KVUb+rMn+8Rrkl8HFc0EazGCXZmOZoQhQwIhgBtFE6QiNI3eAChO49gcI1PDJ1UacddfnOHIhJA5kD10npDA0QiBRwAHoImXFFT2ixpoAlRmL7w1yBYAaDhM220XZbBmdb3s17Ajl0E2e1VupuofkGF/TiPKZr+MsPZmmVtoMp/f6zxurjJTbUqXg9fpmnFemwjtcuAr8f0+EqFpd+9idT428Y9i8KqODmcHwBv42Osfw1bMbXN+fdW/lrOGUZSe7OtaYrZEb2ZtmIt042vpeaDZWMCqO5lXgdLH6mQXcDVKaluLNdiPBd0saeCLqCxuSNSdT4To6bHKMrju/BhnlGUalsiRj8EKiHNYk6/wDE5Hj6Ps6jod6MV8gdPhO00MPlUKBoJy7t/hAmLY20dFb/ANvdPyE+gxt1ueFmiuxQMwhXiAYmaGItjCDRpnt4wjU8oASQ0F5FzRwsBxvGmKhZaJLxsvwEPIYgLrsnhPbYuinDOHb+VO8fWwHnO7oNJy/8KNnXerXI3AU18T3m/wBk6jMpvc6MapCTENFmNtILEGAQGEIDHFjqRpY6kBDyxQiVihGAcznb7DZ8BiRa9qZceKEP/tmjkXaWHD0nQ7nR0/qUj6wE+DzLkgibdIJZiIeFFtu5wl1gUEIpV56RBaKveAEjZSZq9JedSmPVxPRxW08/dlaWbF4cf+VD6G/0noi2kTKiR2lXj9kq407p5iW7LEFJjPFGSqSs3hklB3FmZXYFh3mLHcD0jmD2GqPm1J68Ly+ZOphZOpmMelxp3Rs+pm1yR6eEF+HpHQltwjwvFKAN83jBLgwlNvkJUsNZzX8T6VzTcdVPnqPlOjVqkwv4gU82GY/pIb0M1i6ZjLdHNjVEJqwkM1IReaWZUPF76wi0aLQs0VhQ+GjrMJGBi1aUJoNXI6x0VbxknXrLLYGANfEUqVvfcZv5B3m+AMVjo7N2F2d7HCUlI7zDO3O7974Cw8ppDG6CWAA4aRyYt2bpUqEtGzHGiGiGNmEIqFAYtY6kaWOpAQ8sUIlYoRgHCaHCaAHmztJR9liq9P8ATVe3gWJHwIhze9rOxjVsXVqhRZip3jgig/EQS9SM9LOVAwXjlt8ILAQgrBaK4QssAL7sSt8dh/57/wDy09Agzzp2axQp4qg53K638D3frPQqvcRMqItzGmaG7Rh3klBu8RnjLvGy8LGSvaQmqSL7SJarAQ5VqTM9p1z0XXmjfAXlviMRaY3tbtgJQe18zgovidD6C8pIls5etSO5775FBh5o7Jok+0hq45yLeWex9i1sST7NQEX3qjnLTXoWtqf8oBPSFhpGw0MtpNHS2Fh00ZnrPxP/AG6fkou7DqSvhJy4RAMgVFXlkRh61AzH1ic0io4m+WY9HnR/wm2bnepiCPc7i+JsWPplHmZSNhU3AIf/AEpn4FJ0fsls16dBMlTKG7+TIgQFtTooB+MTntwNY0nya1RDkVKrr7yhhzTQ/wBJ/eP0qqtex3bxuI8Qd0koBESwjlokiADZETHCIgwGKWOLECLWAh1YsRCxYjAOEYcIwAi1KYuYI/aCAHlwRN9POLteEEvwlmQ2TDJjuS3j8fKXWA7HY2tZloMi8GqWQW8G73wibrkaV8FArzsXYbtQtakKbtaqgsb/AJ1GgYfWZSj+GWJIu1agt+rt8csdH4c46mQ9KpSZl1BV2Vr9My2+MSkn3K0yXY6k1YSO9Wc+ftJisLZMbQdOAe3dbwYd0nzk2l2vpOPeMewWat60ZavM1U7TUv1yHW7UUxuJPgDJCzWtiJGxGPCi5IAmJxPahj7igdWP0Eosdti+tRy3JRoPSMLNfj+0Ca3Y5ANSOPQTn23trtiHzbkXRF4AfvIOP2i1Sw91RuUfXmZFzR2LSGxibQ7xVNC37mA0i/7I7A/iXLOStFPfI3sd+RTzOnrN7Xy5QqgIiCyouiqOg58zvMsOxuxwMFRVRcuocnd73eufUzS0diU6ViEFRr3Of3R1AP8AeZylW5pGN+5gaOAqP/26bv1VTb+vdJCdlMW2vslX+Z1+hM6K2My2VgRp+UXGm/QaiVWK7R0kOrXXcbgghuUxl1GOPL/01jhnLhGVTsjix+Wn/X/abfY2dKaJURlZVCkizqbcipJ9RK0bdRjYNYnQh2yqOdiOPnHMDtbJ3H95QdSSAde6Nbk7t+syXWY7q9vJo+lnVmlRgdxvG69DNqDlcbmHDoRxXmJCwe0UdVJZQT+UkAg8t8saVQNu1+XrxnTHJCauLMJQlHlCMFiM4NxldDldeTWB05qQQR0PO8fMgFcuJUj89Jg3jTdch9KjyeZZmIMQY4Y0TABaxaxsGLWADyxYjaxYjAOAwQGABQRHtBzggB5gykbuHpJWydnPiKq0aa3dz5KBqWY8FA1kJm4XnS/wnw6inicQR3rrTB5KFzm3iSv9MbdIhK3Ro9i9nsPggCqB6ugaowBa5/QPyDoNed5plpXHe1vr/aUvZ12dndlOraEi2nC15fXnOpOStnQ4qOyEVEFsthbh5RJBtobRQ33MbrMY7ChNVEqIadRA6EEMrgEEWnD+33Zc4GsGpE+xqXKa3Kke8hPG28Hl4TtNerl3b+NuX1mN/FMqcEl9T7YFCd+qvf4XlxlvREo7WcfOLfjr6iJ/jm/T8THWQRo0xNTLYbfFuenhGDc79ZINOE1M77RDsYAgtHlWKp0ixAEdBY3h6BY9OJk+nQ1Chb5iFW+65Nh46mPWCjKBpx6mXHZLB+1xlFTzLEb9EQsPDUCZSkbxjR2XY4FKiq/lVQB4DcIdXbdMX71rdDGFYgAX3cDu8JAx2FQkb9/oPTWeb1GfIv8An6/o7cWGHcgdoNsqzoEqsrWJ4gEHiuup4SvKqSbENcm5PHX7+Ed23SCuuUDIUXkRoTcX56jfykKm1tWRbKL78pHWx36DhvM4Jtydvk7YRSVIlbh7o05aaaXtz3ceUboI7VEshK3AYXA7nPNw338t0NMUosy5vnYdb/eoi2xY1IupO611HXdf4zOLafBbVov8Rsygr+zuwY/muCBxGZV3Xvx5y02OppMye0R9blS1nF7ZTu4giY2jXd2C5WOUBbITcglrjQeBmgweHFFi7nVhYIxDNY78xAtOvA3rtRrfnwjkzR9NOV/LyzTkA1M/6Vyg/wAxBb5L6SQTK7ZuKDg2W1tOkkGqL2vuntqVq0eVKLi6Y+TG7xHtIkPGSPAxxTI4eOq0AH1McBjCvDLiMB+8j43FpTRndgqqLknkJEx+1UpKWdgAOJnK+1PaZ8S2RbrTBuAN7Hm30ElyoqMXIi7X7Z4h6ztTZUQnuqd4A0F9eNr+cEz5HX5wRaitCKYtN9+Fu10V6mFqHKtdRkO6zqGBHmDp/LOfwy9jdSQQQQRvBG7WatWjCLp2eiMMr0gVc3yiwPMcCDJobug3tYfG2k5Dsb8UalNAmIT2oGl+M0uG/EzBMtj7RNx3XGnjOfQ1wdOpM3iXsDbW1z0jLuWZTu3/AHpMjV/EjAW99z0ty8JR7Q/FakoIo0S3AZtBDSwtG9ruMzO/dRVIZibaicf7cdphiay06f8A2qQIX/M1gLyq272zxOKBDuVW/uLotup+kztBtby4xp2RKVqixdokNI/tJKwuFqVA7IhYIuZyLWVddTfwM1MqBvhBYyrxYeMVCiv3zkvCIAM27lIOfWWww90JH5eHQDWTJ0ioK2MM8134W4fNiqj8KdIjzd1sfRW9ZiS06d+EGGGTEPzdEv8AyLm/3zNI1cjYY+mR3hx+cqXxehuGJ6DXz6TUVF0tKfE7OJ9w2J4Hd68J53UYG3cdzuwZo1UjIjPnZiwIN2ysLga7r7j6RbZGA0F9wAuPnw0modEpIA6knjZb/EC0z9d++ch7hNrDh0Jv48JzSxtJJnVGad0JNBLC6an/ADj9jYxbKnHD3PDOWYcri2nGXuB2KmUFxmb4Dp1lqmDW2WwtytN8XTTq3X2MZ9RFOt/uZzB4qowyImQf5FUf6ZcYDZOY3dPMk3Ms8PhVTcLSfTYTshgfLZy5M/aKGqVFUACgDwmP25tU0sS6XsO6w8GUH53m4VJxz8Yg9PGUnRiM9GxHAlHPDwcTocdjlu2auj2gvxktNticTo9oKy+8oPhcSZS7WNxRvIiL1BsdnXbAi/8AGROOr2vPBG+ED9qax91AOpJPwELY6R2FtudZRbV7aIl1Vs78lOg8TwnMX2hWq++7BeIGgjlNABYaCJyZUYotdp7XqV2u7acBeyjy4nrIQ+/vlLfs3swVGcuMyqN3C547+GvrKnFAKzAbgxA5kXsLzOMk5NeDZxqKYzfx9IInMYJoRZSdPn4b4W8f8Rxk3AnjofvwiHW3Xl4Tc5CDWjWpHh9ZZDCO1mVGsb6hWI0943A4ceUgu9ja1gLA89JLKQyDYwyYC2t4iIYcco743FrpAB8zSdlauXDbQP8A4kX+p2EzN5a7LrZcLih+o0V9PaN9IxFWrReaNpJOFwj1DlRb8zuUeJ4QChNL3h4j5y8p4nIVuNDcHztA2GWkjKurEd5/LcOQjGJvkuOl/DpJfqTLitLIFVu8bbr6Acv2nZfwopWwOb9dSo3oQn+2cXOm/wBP3nb/AMMSP8Po251PX2r3hEJGtqCRyuskOZEqPFKKYRk0OtrGXwqtvAPiAYkV4tMQJLimWptcDiKRJCpGVqCSEaNRJchSJH0pwljqy6JbF2nL/wAZqAthntuNRL/zBGH+kzqF5zz8Xlvh6PP23w9m/wBbQfAR5OONSv8Af0hDD3MsFo34eMkLh1Gp/uTeZ2aqJUihaSEoAb5MejbfGXMVjqhDPaHTqkkAbzoPOMpSd2yopduS6y+7MbGYVs9VlApgswBuQbcTuva+gvIyZIwi22VCEpNJI2GzcN7GilNbGo/eAty/M3TUDreV1TsiTWuXshAJtq2Y+8LnQC8tlfIDiH95yAqgXaw9xBzsCSbcSTK6vtyo7+ypgs28qliVv+t9yfE9J5kcmVt6X7s9H4cK3RYLsLCLpZNOZufOFGl2X+qogbiLA2Pi2vrBJ9X9n+Sqj4Ryq/3aWeysYwR8MPZqMQaaNUffTF7e8ToLHytIuBpKzqrlghYBiq5nAvrlXi1pb7bweERkqUKhamzqj0TmFVAPeJY3AJsfMjfPoDwC87RVK2AXDU6LlqSI/eZFsS2nfYaEG5IBt5znVTCLwPpOkYntbhnJwxRkwjoA7C4qhwDr3WIYaIPLlB/j+FbD1K74bDmqHNNKQQZ2p2UDPvyaEm4PACIDl74W3GJNG0vNmlBUQ1VLUwwzhdCVvqBr9Y72hTCh1OFz5GQlg9+6xJ0uenU8NYUPUZ4JAFmn2t2YbDJRzVFNWsVy0stmXNxZ75dGIHnK/bOyXwz5KjIXy5iEbNlvwbQWMAsq8sk0WtQqD9TIf6Qw/wB8bCyd/Ck4YuP/ANGU6aXyqw152VohoTsXZLV7m+VFtmO868FHO01aKgGRFyqo0HE+fEnnMVs/HPTvlOh3jgZp9lbaR27wsw8idOA4zOSZrBx+orEYQ6llvfcu71MrMNqChG4lT9+E0OPps63BvfcBw5X6zLU0ak5Dn3ib9DwjgxzREq0SrFTw+wZ1b8J9pA0HoHRqblgL/kfW/wDVmnPtopn1G8D1Ft0R2b2w2GrrUF7e66jip36cxa//ADK4Zm90ehGeRKzSNgdpJVRXRgVYXBBvvh1XgyExp3gR4y7wK0guyxovJ1FpV0WlhRaUhFghjymRUaPB5Qh4tOYfijjg1SlSGuUM7eLd1fgGm123tpMOjO7WsN3E8tJxjaWNavUeo5Izm/kNwGu4DSTLguCt2M5yRoN3DgOpMQzhTo1z6KLngTujNV7btBylVjsRcFeG7oJnRs3RtcN2UxD2LlaYPM5m9F0t5yzTsthqYzVXL24E5U9BqfWUew+2CU8OtOpVN0GUWVmLLc5bWIAsLDWV+0+2SsTkol+TVSD/APAFvWcUo9RKTjwvlsdcZYIxTe7+5a7a26iKaeGQcrouVflrLbYWGyrRom5Zz7R94OUai/i3+mY/spTfE4kO5uE71raAnQWG7QX+E39CsAj4hr985adt5AuqBQN5tdvWZZkoehbvv7mmNufq4XYrNtVsRiazrTb2WHp90uNC1rZ7PwFwRpvsZO2ZkRBTwyqqgd6qeJ4kX1J6n4yD/DsVD1iEppuQHurbdm/W27foOHOV+P2kzqUTuUxx3F/HjbpCMHL0rhfb9lSlGCt8/ksK2NwwYhmuQdTYm/nBKAUk5MfAWHlpCnV8D5s5/wCQ/CGKu10p4pMRhqK00TLkRu8LhCjs4B1vmPHgOZk7tL2edVGLp53o1U9uzVCiFDUbNawIvfNcAA2mVW801HtEiYNaHsc1QOjhqpDoGVlIygi4GVQMvUz0Dyyt2b2fxFdXZEuEUMS5CAggsCua2YWF7/GVS1PMWv49Z12t2wwi0lfMTdQgoqLva9mDICAoAGhJ1B8pz/F7QTLWoYWh/wBOqVKZ0z1g62LFLHug20XW2u6KwZRIjMdAxFwNBfVjZQbcTuE2GxcbhsOVw+KwoR7kVqjr7Q5cjMllFypuU3aWgwmyKqIcGmJwyvVanVKAMXDDvhQ4BAI9mDbf4X1zW1VrNiagq5nqhyr27xJQBdMo3WAtYRgWO2q2CAD4YVs+dcoc2WmiAcdSxJFxrpfhulhQVdoqRUcJiKai9V20elmYsBSAALKDv8NZjiCDrppx6aE/P4ydsnCrVqZHqrRUgnO+q3AuBwtf75FAX23+x60Fb2dVqrhUfIqZmyuSMxK6BNDY24GMdkMVSu+GxGlKvlXPxp1VPccDoSQRxBI4xvY3t1KYhmr06IAR6yhjlQaKqg71zEDdYcpI26Vo0xhxSPs3y16VSoVNaze+So3BtdG1sfCwBR9pOz9XBVjTqLodVYaq6ncyNxX5bjYyoK8ZvtjdpKdSmMHtAGpRv/06umeix0uGP10PHrT9quydTCEOpFXDv7lZR3Wv+Vh+R/8AKfK+tkUVmA2zUp21zgc9/wDfzlpVqUsSrZSFew0OlzM02/SBdDxBFtdx9ZLiUptbPctqFVlY03BV1NrHjb78xE4vC37y7+I5+HWQsTimcDNq40DfmI5Nz6GPYbHXGVt/Pn4yvcXsWPZ/tFUwzWXvITqh+JXkZ0PZnaelWHdax4qd48pyysmboef72kdabA3BKkbj+0T2HVna/wCKB4xxKwnIsN2grJoxLdQdfiCPlLKn2vYfm9UN/UNETTOsUKsnUq4nIB21f9QPkf3jdXtpVO5j5DL8STHYUztFTaKIuZ3VQN5YgD1MzG2+3tNBan32527vkN5+XWcqxG1q1Q3LHxNy3qfpGlB33ueZMNRSj5LvaG2HrtmqNfkL6C+nhf76SKGvpbXrwkJH+xJAe26Q0aJ0OvTG8nXXqPhIGJw4PD1+cmol9SSfj8YpqYH990BspBhR0++kUmAd1ZgLIu9ju8Op6R7G4kqfd05EEAgcNN0m4rbC1lyIoQKoIQ+6bC5FxJk5KqQ4qLu2afsfs/2WHdxfM4yrcWOZyFU+hvbpLzbe0KeHCU97Iosg368bcNLannMVsbtNXQotUGrTWoGGUAEaFbaDUDMTY8t8mbQq+1rPUtbO5IJ/SLAHX/KBOL+PKWRuXudizKMEojWIxVSu12F7e6g91Rz5E9Y/Qw9gNd2muuvhzjmAvqbFRuBtdjfpyHOLxVZUW5Ntd29r9J2QhWyVI5Zzvdu2NsBy+MEpamNqEkgMBw0gm9GOtFRrr0hqOfjCY+pgv9+d5RgG7WHX4ceHOX9RHwFWnUo4inUd0fKygHKDZTmU3sdRa/I3Ez4++XKTqO03Si9AZCjm5zKrMpAUd1iO6dPqIAW3Zfb1Ogze0TvMzN/EAB6yFhwD6b7m/U6GHsftClDG1a2V2p1WIJbKri7AliEUrf3u6OnGZm3H7vCYEafdoDs3Xa/tbcBMO1Ns6FXqqjBgjFgEAcaG35td53TDUaDOQiKzMxsFUFm56Ab9PrCZr/f30kzY/wDEq5fDLULqCCyKWIUjXUDQ2v1iA0uBw2EqUloValSg9J1NRKzmz2vnRFJCJ37a2v8AOK7QYzZ9AhKdH2707EMXz0spuMlRs5JA1OQaAka75mMRgqi0lxLg5KrsFctdncE3Y8dbNrxsfPZbN2gibPSuv8O9WgroVdcpKveyMDq7k5DcaGxHOAFVt3YJT21R62HVstOqKNMZVKOcgyAnTUXtrffpeMdm+0z4YGk6ithXFnpuMwy9B8vhKzZOCo1Ff2lcU6iqCmZbo4FwQzDcdAB8L7pCR7iAGq272TpvTOK2exq0Pean71WjzuN7r/m3jjfUjFWvxl1sba1bC1BUoOUN9R+Vudx4X+9JpsRs7DbUU1MMFw+MGrUCQtOqeJQ7lYm/+U9CSQD5OfERp15SZicM9N2R0ZHUkMrCzK3IgxlkgMFHFEaHUfESWlQNuN9N39pXOsbzEGIaZZkDlaGuFB6/OQqeKI36/OPriFPG3jFRVj38MI6uE4/vpE065GoJjoxhOhGnTT7MVMaaFquuv3+8Vk8vv79YQxSW9034xaVkO8/A2+UVDtBKnAD7EkJS5n6fGEMQnA/vy+xDaqvP0joVkmixAsB5/eg8YANeu++8+V4lK68SbeBvDSuu/wC+kVMdoRiMEHG7U85CGyArWOnQan56S3pV76br9frp93jqVso4AeXz9dYtLHaGcJgWUDSw5m5v4LLKnhkGoW5HFtT4gDQSvfbFNQfzEb7c+rHQfGV2L2k7C+iKdLX1Plv/AOI1FA5bF9jNpU0GhLNy5ef0lGzNWa5J6D8tuQH1kZRm0Cm1rb9T1PC3hLGkpAANtPXW2lufxm0I92c2TL2QecDQW0++UEWo6/D+0ObUc5mrj7+EMHTjr84IJgdIq94TAeHle190EEBCm8B96xtt/SCCABH75f2kzA7Vr00enTqMiue+FNrm1jZt66WGkEEBkRmOUC5svugnQX32HCJbSCCJiDI5/wDF/nAPDd8YUEBjtO+++l4oXBDoxVhuI0P3uggjEa7B7XobRUUMaMmIUZaeJUFibflqqNWXzuOB10z3aLs9UwdRqdQDQgXBB33I3WvcDQ2G7UCCCIp8FOy7za2viBvtod8bahpe4sf3PTp8YIIAhhqREbMEEQ0GrkbjHVxbDrBBEMX/ABnSOfxg5H1vBBABQxi9Y6mOUcDBBABa7THI/KGNpn9I9d0EEAEvtFyd9uGnz6yO2LJ3kn6DpfjBBGNj9GmzEfltrpwBOmssP8PUAm5B5+9rcDjDgmiSOecnZIp0lGu4ab99iLgi2nOPM3HQ9fEkcfAwQSlwZ9x7yggglkn/2Q=="
            alt="Titulo"
            className="w-full h-auto rounded-t-lg object-fi"
          />
          
        </div>
        <div className="w-1/2 bg-white p-8 m-4 rounded z-10">
          <div className="border-b-4 border-green-500 mb-4">
            <h2 className="text-5xl font-semibold text-center mb-6">
             Titulo
            </h2>
          </div>
          <h4 className="text-gray-700 text-lg">
            <span className="text-black text-xl font-semibold">Receta: </span>
           
          </h4>
          <h4 className="text-gray-700 text-lg mt-2">
            <span className="text-black text-xl font-semibold">Ingredientes: </span>
            
          </h4>
          <h4 className="text-gray-700 text-lg mt-2">
            <span className="text-black text-xl font-semibold">Utencilios: </span>
           
          </h4>

          <h4 className="text-gray-700 text-lg flex items-center">
           
           
            <span className="p-2 bg-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="transparent"
                className="w-10 h-10 text-yellow-500 animate-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  fill="yellow"
                />
              </svg>
            </span>
          </h4>
          <div className="flex items-center">
            <p className="text-gray-700 mr-2 text-lg">
              <span className="text-black text-xl font-semibold">
               
              </span>
            </p>
            
          </div>
        
         
          </div>
        </div>
      </>
    );
};

export default DetallesReceta;

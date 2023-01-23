<div id="myModal" style="display: none">
     <div class="centro">
           <button onclick="closeModal()">X</button>
          <span id="frase"></span>
     </div>
</div>
<div class="container containerFormulario">
        <input type="hidden" >
        @foreach ($campos as $item)
        <div>
            @if ($item == "parede")
                @for($index = 1; $index < 5; $index++)
                    <div class="tamanhoFluido">
                        <h2><b>{{ucwords($item)}} {{$index}}</b></h2>
                        <label for="">Largura</label> <br>
                        <input type="text" name="largura" id="largura{{$index}}"><br>
                        <label for="">Altura</label> <br>
                        <input type="text" name="altura" id="altura{{$index}}"><br>
                        <div>
                            <h3><b>Qtde de janelas</b></h3>
                            <button id="decrement-btn" data-type="janela" onclick="decrement({{$index}})">-</button>
                                <span id="counter-janela{{$index}}">0</span>
                            <button id="increment-btn" data-type="janela" onclick="increment({{$index}})">+</button>
                        </div>
                        <div>
                            <h3><b>Qtde de portas</b> </h3>
                            <button id="decrement-btn" data-type="porta" onclick="decrement({{$index}})">-</button>
                                <span id="counter-porta{{$index}}">0</span>
                            <button id="increment-btn" data-type="porta" onclick="increment({{$index}})">+</button>
                        </div>
                    </div>
                @endfor
            @endif
        </div>
        <button type="submit" onclick="validaItens({{$campos_json}})">Enviar</button>
        @endforeach
</div>



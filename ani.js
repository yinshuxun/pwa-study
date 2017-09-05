(function (lib, img, cjs, ss, an) {

    var p; // shortcut to reference prototypes
    lib.ssMetadata = [];


// symbols:
// helper functions:

    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;
        return clone;
    }

    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;
        return prototype;
    }


    (lib.补间2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E60013").s().p("AD1EvIAAi/IgBABIiUC+IhmAAIAAkqIAAgTIAAgLIAAgiIABgBIAAgPIkoF6IhdAAIHUpdIAAASIAAANIABBpIAAARIABD8IAUgZIgZAiICtjcIAAAAICXi+IAAI9IgBACIABABIAAAZgAhOEvIAAi/IiSC/Ig7AAIEElNIABFNg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-39.5,-30.3,79.1,60.7);


    (lib.补间1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E60013").s().p("AD1EvIAAi/IgBABIiUC+IhmAAIAAkqIAAgTIAAgLIAAgiIABgBIAAgPIkoF6IhdAAIHUpdIAAASIAAANIABBpIAAARIABD8IAUgZIgZAiICtjcIAAAAICXi+IAAI9IgBACIABABIAAAZgAhOEvIAAi/IiSC/Ig7AAIEElNIABFNg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-39.5,-30.3,79.1,60.7);


    (lib.元件2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#555555").s().p("AgWAgIADgKQAIAFAJAAQAMAAAAgKQAAgIgLgFQgTgGAAgNQAAgIAHgGQAGgGAKAAQAKAAAHAEIgDAJQgIgEgGAAQgLAAAAAKQAAAHAMAFQATAGAAANQAAAKgHAFQgHAGgLAAQgLAAgJgEg");
        this.shape.setTransform(407.5,11,1.642,1.642);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#555555").s().p("AgQAjIAAhEIALAAIAAAOIABAAQAEgQAOAAIADABIAAAMIgEAAQgNAAgDAPIAAAGIAAAkg");
        this.shape_1.setTransform(399.6,10.8,1.642,1.642);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#555555").s().p("AgVAbQgJgKAAgQQAAgPAJgKQAJgLAOAAQAPAAAIALQAGAJAAANIgBAEIgwAAQABAMAHAHQAGAGAJAAQAKAAAJgEIADAJQgKAEgOAAQgOAAgKgJgAgMgTQgEAFgBAIIAjAAQABgHgEgGQgEgHgKAAQgIAAgFAHg");
        this.shape_2.setTransform(389.2,11,1.642,1.642);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#555555").s().p("AgFAwIAAhEIALAAIAABEgAgHgoQAAgHAHAAQAIAAAAAHQABAIgJAAQgHAAAAgIg");
        this.shape_3.setTransform(380.5,8.8,1.642,1.642);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#555555").s().p("AgFAzIAAhlIALAAIAABlg");
        this.shape_4.setTransform(375,8.3,1.642,1.642);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#555555").s().p("AggAyIAAhhIALAAIABAMIAAAAQAIgOAQAAQANAAAIAKQAIAKAAAQQAAAQgJALQgJAJgNAAQgOAAgHgLIAAAAIAAAmgAgLgiQgFAEgCAHIgBAFIAAAMIABAFQABAGAFAEQAGAEAGAAQAJAAAGgHQAGgHAAgMQAAgLgGgHQgFgIgKAAQgGAAgFAFg");
        this.shape_5.setTransform(365.9,13.2,1.642,1.642);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#555555").s().p("AggAyIAAhhIALAAIABAMIAAAAQAIgOAQAAQANAAAIAKQAIAKAAAQQAAAQgJALQgJAJgNAAQgOAAgHgLIAAAAIAAAmgAgLgiQgFAEgCAHIgBAFIAAAMIAAAFQACAGAFAEQAGAEAGAAQAJAAAGgHQAGgHAAgMQAAgLgGgHQgFgIgKAAQgGAAgFAFg");
        this.shape_6.setTransform(352.5,13.2,1.642,1.642);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#555555").s().p("AgdAGIAAgpIANAAIAAAmQAAAWAPAAQALAAAFgMQABgBAAgEIAAgrIANAAIABBFIgMAAIgBgLIAAAAQgHANgOAAQgZAAAAgeg");
        this.shape_7.setTransform(339,11.1,1.642,1.642);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#555555").s().p("AgcAsIADgLQAKAGAMAAQAUAAAAgQQAAgMgSgHQgZgIAAgTQAAgLAIgHQAJgIANAAQAOAAAIAFIgEAKQgIgFgKAAQgIAAgFAFQgEAEAAAGQAAAGAEAFQAEADAKAFQAYAIAAATQAAAMgIAHQgJAJgPAAQgQAAgJgGg");
        this.shape_8.setTransform(326.7,8.8,1.642,1.642);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#555555").s().p("AgUAbQgKgKABgQQAAgPAIgKQAJgLAOAAQAPAAAIALQAFAJABANIgBAEIgwAAQAAAMAIAHQAGAGAJAAQAJAAALgEIABAJQgJAEgNAAQgQAAgIgJgAgMgTQgEAFgCAIIAkAAQABgHgEgGQgFgHgJAAQgIAAgFAHg");
        this.shape_9.setTransform(310,11,1.642,1.642);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#555555").s().p("AgWAgIADgKQAIAFAJAAQANAAAAgKQAAgIgNgFQgRgGgBgNQABgIAGgGQAHgGAJAAQAKAAAIAEIgEAJQgHgEgHAAQgLAAABAKQAAAHAMAFQARAGAAANQAAAKgGAFQgHAGgLAAQgLAAgJgEg");
        this.shape_10.setTransform(299.4,11,1.642,1.642);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#555555").s().p("AgUAbQgKgKAAgQQABgPAIgKQAJgLAOAAQAPAAAHALQAHAJAAANIgBAEIgwAAQABAMAGAHQAHAGAJAAQAJAAAKgEIACAJQgJAEgNAAQgPAAgJgJgAgMgTQgFAFgBAIIAkAAQAAgHgDgGQgFgHgJAAQgIAAgFAHg");
        this.shape_11.setTransform(288.9,11,1.642,1.642);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#555555").s().p("AARAjIAAgmQAAgVgQAAQgMAAgEANIgBAGIAAAoIgMAAIgBhEIALAAIABAMIAAAAQAHgOAPAAQAJABAHAFQAJAJAAAPIAAAog");
        this.shape_12.setTransform(276.5,10.8,1.642,1.642);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#555555").s().p("AgFAwIAAhEIAMAAIAABEgAgHgoQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
        this.shape_13.setTransform(267.2,8.8,1.642,1.642);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#555555").s().p("AARAzIAAgoQgBgUgQAAQgLAAgFAMIAAAGIAAAqIgMAAIAAhlIAMAAIAAArQACgEAHgFQAHgDAFAAQAJAAAHAGQAIAIAAAPIAAApg");
        this.shape_14.setTransform(258,8.3,1.642,1.642);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#555555").s().p("AgWAlQgOgNAAgXQAAgWAOgOQAOgOAWAAQANAAAKAEIgEALQgHgEgMAAQgQAAgKAKQgLALAAARQAAASAKALQAKAKAQAAQANAAAIgEIACAKQgKAFgPAAQgUAAgNgNg");
        this.shape_15.setTransform(244.6,8.8,1.642,1.642);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#555555").s().p("AARAzIAAgoQAAgUgQAAQgLAAgFAMIgBAGIAAAqIgNAAIAAhlIANAAIAAArQADgEAGgFQAHgDAFAAQAJAAAHAGQAJAIAAAPIAAApg");
        this.shape_16.setTransform(226.2,8.3,1.642,1.642);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#555555").s().p("AgEAoQgFgFAAgNIAAglIgKAAIAAgKIAKAAIAAgQIALgDIAAATIASAAIAAAKIgSAAIAAAkQAAAOAKAAIAIgBIAAAKQgEABgHAAQgJAAgEgFg");
        this.shape_17.setTransform(215.7,9.5,1.642,1.642);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#555555").s().p("AgFAwIAAhEIALAAIAABEgAgHgoQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
        this.shape_18.setTransform(209.1,8.8,1.642,1.642);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#555555").s().p("AARAjIgRg3IgRA3IgLAAIgVhFIANAAIAJAjIAFAWIAAAAIAHgWIALgjIAJAAIARA5IABAAIAFgXIAKgiIAMAAIgWBFg");
        this.shape_19.setTransform(197.8,11,1.642,1.642);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#555555").s().p("AgVAgIACgKQAIAFAJAAQAMAAAAgKQAAgIgMgFQgRgGgBgNQABgIAGgGQAHgGAJAAQAKAAAIAEIgEAJQgGgEgIAAQgLAAAAAKQAAAHANAFQARAGABANQgBAKgGAFQgHAGgLAAQgLAAgIgEg");
        this.shape_20.setTransform(179.4,11,1.642,1.642);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#555555").s().p("AgQAjIgBhEIAMAAIAAAOIABAAQAEgQAOAAIAEABIAAAMIgFAAQgNAAgCAPIgBAGIAAAkg");
        this.shape_21.setTransform(171.5,10.8,1.642,1.642);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#555555").s().p("AgUAbQgJgKAAgQQAAgPAJgKQAIgLAOAAQAPAAAIALQAFAJAAANIAAAEIgvAAQAAAZAXAAQAJAAAKgEIACAJQgKAEgOAAQgOAAgJgJgAgMgTQgEAGgBAHIAjAAQAAgHgDgGQgFgHgJAAQgIAAgFAHg");
        this.shape_22.setTransform(161.2,11,1.642,1.642);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#555555").s().p("AgcAoQAGgCAFgEQAHgFAEgJIABgDIgBgEIgZg/IANAAIASA3IABAAIASg3IANAAIgSAyQgNAhgKAJQgHAGgIADg");
        this.shape_23.setTransform(150,13.6,1.642,1.642);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#555555").s().p("AgdAGIAAgpIANAAIAAAmQAAAWAQAAQAKAAAFgMIACgFIAAgrIAMAAIAABFIgKAAIgBgLQgJANgOAAQgYAAAAgeg");
        this.shape_24.setTransform(137.9,11.1,1.642,1.642);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#555555").s().p("AgdAwIAAheQALgCALAAQARAAAJAHQAIAGAAALQAAAQgQAFIAAABQAIACAFAEQAHAHAAAKQgBALgHAIQgKAJgXAAIgTgBgAgRAnIAKAAQAYAAAAgSQAAgTgYAAIgKAAgAgRgmIAAAgIAMAAQAIAAAGgFQAFgEABgIQgBgPgTAAg");
        this.shape_25.setTransform(125.5,8.8,1.642,1.642);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#555555").s().p("AgZAtIADgKQAIAGAMgBQAVABAAgYIAAgIQgHAMgOgBQgNABgIgLQgIgJAAgOQAAgQAJgLQAJgKANAAQAOAAAGANIABAAIAAgLIALAAIAAA6QAAAXgKAJQgJAJgPAAQgPAAgIgGgAgNghQgGAIAAALQAAAMAFAFQAGAIAJgBQANAAAEgLIABgHIAAgMIAAgGQgFgOgNAAQgIABgGAGg");
        this.shape_26.setTransform(106.8,13.3,1.642,1.642);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#555555").s().p("AARAjIAAgmQAAgVgQAAQgMAAgDANIgBAGIAAAoIgNAAIgBhEIALAAIABAMIABAAQAGgOAPAAQAJABAIAFQAIAJAAAPIAAAog");
        this.shape_27.setTransform(94,10.8,1.642,1.642);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#555555").s().p("AgFAwIAAhEIALAAIAABEgAgHgoQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
        this.shape_28.setTransform(84.7,8.8,1.642,1.642);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#555555").s().p("AgEAoQgFgFAAgNIAAglIgKAAIAAgKIAKAAIAAgQIALgDIAAATIASAAIAAAKIgSAAIAAAkQAAAOAKAAIAHgBIABAKQgDABgJAAQgIAAgEgFg");
        this.shape_29.setTransform(78,9.5,1.642,1.642);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#555555").s().p("AgRAaQgKgJAAgRQAAgOALgLQAKgKAQAAQAMAAAFAEIgDAJQgFgDgJAAQgLAAgGAHQgGAIAAAKQgBAMAIAHQAGAHAJAAQAIAAAIgDIACAJQgIAEgMAAQgOAAgKgKg");
        this.shape_30.setTransform(68.7,11,1.642,1.642);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#555555").s().p("AgUAbQgKgKABgQQgBgPAKgKQAJgLANAAQAPAAAHALQAGAJABANIgBAEIgwAAQABAZAXAAQAKAAAIgEIACAJQgKAEgMAAQgQAAgIgJgAgMgTQgFAFgBAIIAkAAQABgHgEgGQgEgHgKAAQgIAAgFAHg");
        this.shape_31.setTransform(57.5,11,1.642,1.642);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#555555").s().p("AARAjIAAgmQAAgVgQAAQgMAAgEANIgBAGIAAAoIgMAAIgBhEIALAAIABAMQAHgOAPAAQAJABAHAFQAJAJAAAPIAAAog");
        this.shape_32.setTransform(45,10.8,1.642,1.642);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#555555").s().p("AARAjIAAgmQAAgVgQAAQgMAAgEANIgBAGIAAAoIgMAAIgBhEIALAAIABAMIAAAAQAHgOAPAAQAJABAHAFQAJAJAAAPIAAAog");
        this.shape_33.setTransform(32,10.8,1.642,1.642);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#555555").s().p("AgYAbQgJgKAAgQQAAgQAKgLQAJgJAPAAQAOAAAKAKQAJAKAAAPQAAASgLAKQgJAIgOAAQgOAAgKgJgAgPgRQgFAHAAAKQAAAMAGAHQAGAIAIAAQAJAAAGgIQAGgHAAgMQAAgJgFgIQgFgJgKAAQgKAAgGAJg");
        this.shape_34.setTransform(19,11,1.642,1.642);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#555555").s().p("AgWAlQgOgNAAgXQAAgWAOgOQAOgOAWAAQANAAAKAEIgDALQgIgEgMAAQgQAAgKAKQgLALAAARQAAASAKALQAKAKAQAAQANAAAIgEIACAKQgKAFgPAAQgUAAgNgNg");
        this.shape_35.setTransform(6,8.8,1.642,1.642);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(0,0,411.2,22), null);


    (lib.Symbol1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#231916").s().p("AglANIADgZIBIAAIgDAZg");
        this.shape.setTransform(177.6,-139.7);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#231916").s().p("AgqA0IAMhgIBJgHIgNBng");
        this.shape_1.setTransform(178.1,-143.6);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#231916").s().p("AgvBcIAXiwIBIgHIAAAAIgXC3g");
        this.shape_2.setTransform(178.6,-147.6);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#231916").s().p("AgwB6IAfjsIBCgIIgCA+IAAAAIgXC2g");
        this.shape_3.setTransform(178.6,-150.6);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#231916").s().p("AgyCMIAkkXIBBAAIgDAjIgBAAIgCA+IAAAAIgXC2g");
        this.shape_4.setTransform(178.9,-152.4);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#231916").s().p("AhpCMIAkkXIBCAAIgFArIAFgHIABgBQACgFAFgIQAXgWAYAAQAYAAANAWIABADQAIAMABAJIAAgBIAHApIgCAIIhLAAIABgCIgBgIIgBgCQgDgKgLgBQgLgBgGAIQgFAJgCAJIAAABIgWC2g");
        this.shape_5.setTransform(184.4,-152.4);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#231916").s().p("AigCMIAkkXIBCAAIgFArIAFgHIABgBQACgFAGgIQAXgWAYAAQAXAAANAWIABADQAIAMABAJIAAgBIAAAAIAEgIQAGgLAKgIQAVgSATAAIAIAAQAdADAPAcQAEAKABAIIhMAiQgDgLgMgBQgMAAgGAMIgEAPIgKBLIhJAAIAKhJIAAgGIABgCIgBgIIgBgCQgDgKgLgBQgLgBgHAIQgFAJgCAJIAAABIgWC2g");
        this.shape_6.setTransform(189.9,-152.4);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#231916").s().p("AihCMIAkkXIBCAAIgEArIAEgHIABgBQADgFAGgIQAWgWAZAAQAXAAANAWIABADQAIAMABAJIAAgBIAAAAIAEgIQAFgLAKgIQAWgSATAAIAIAAQAdADAOAcQAFAKABAIIAAAIIgEAnIhIAIIAAgBQACgNgCgHQgEgLgLgBQgMAAgGAMIgEAPIgRB9IhIAAIAPh7IABgGIAAgCIgBgIIAAgCQgDgKgMgBQgKgBgHAIQgFAJgCAJIAAABIgXC2g");
        this.shape_7.setTransform(189.9,-152.4);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#231916").s().p("AgxCMIAXizIABgGIAAgCIgBgIIAAgCQgDgKgMgBQgKgBgHAIQgFAJgCAJIAAABIgXC2IhJAAIAkkXIBCAAIgEArIAEgHIABgBQADgFAGgIQAWgWAZAAQAXAAANAWIABADQAIAMABAJIAAgBIAAAAIAEgIQAFgLAKgIQAWgSATAAIAIAAQAdADAOAcQAFAKABAIIAAAIIgOB0IhHAAIAJhFIAAgBQACgNgCgHQgEgLgLgBQgMAAgGAMIgEAPIgZC1g");
        this.shape_8.setTransform(189.9,-152.4);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#231916").s().p("AgxCMIAXizIABgGIAAgCIgBgIIAAgCQgDgKgMgBQgKgBgHAIQgFAJgCAJIAAABIgXC2IhJAAIAkkXIBCAAIgEArIAEgHIABgBQADgFAGgIQAWgWAZAAQAXAAANAWIABADQAIAMABAJIAAgBIAAAAIAEgIQAFgLAKgIQAWgSATAAIAIAAQAdADAOAcQAFAKABAIIAAAIIgUCmIhHAAIAPh3IAAgBQACgNgCgHQgEgLgLgBQgMAAgGAMIgEAPIgZC1g");
        this.shape_9.setTransform(189.9,-152.4);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#231916").s().p("AgxCMIAXizIABgGIAAgCIgBgIIAAgCQgDgKgMgBQgKgBgHAIQgFAJgCAJIAAABIgXC2IhJAAIAkkXIBCAAIgEArIAEgHIABgBQADgFAGgIQAWgWAZAAQAXAAANAWIABADQAIAMABAJIAAgBIAAAAIAEgIQAFgLAKgIQAWgSATAAIAIAAQAdADAOAcQAFAKABAIIAAAIIgZDOIhHAAIAUifIAAgBQACgNgCgHQgEgLgLgBQgMAAgGAMIgEAPIgZC1g");
        this.shape_10.setTransform(189.9,-152.4);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#231916").s().p("AA/CMIAWivIAAgBQACgNgCgHQgEgLgLgBQgMAAgGAMIgEAPIgZC1IhIAAIAXizIABgGIAAgCIgBgIIAAgCQgDgKgMgBQgKgBgHAIQgFAJgCAJIAAABIgXC2IhJAAIAkkXIBCAAIgEArIAEgHIABgBQADgFAGgIQAWgWAZAAQAXAAANAWIABADQAIAMABAJIAAgBIAAAAIAEgIQAFgLAKgIQAWgSATAAIAIAAQAdADAOAcQAFAKABAIIAAAIIgbDeg");
        this.shape_11.setTransform(189.9,-152.4);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},37).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[]},12).wait(1));

        // o
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#231916").s().p("AgfgQIACgJIA9ArIgEAIg");
        this.shape_12.setTransform(167.5,-147);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#231916").s().p("AghgKIABgFIABgDIADgHIACgIIA8ArIgEAIIgDAGIgCADIgEAHg");
        this.shape_13.setTransform(167.3,-146.2);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#231916").s().p("AgmgIIAGgFIAEgHIAEgHIABgFIABgDIACgGIA7AqIgEAGIgCAEIgDAGIgHAJIgIAIIgJAIg");
        this.shape_14.setTransform(166.4,-144.5);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#231916").s().p("AgrgRIACAAQAHAAAFgEIAFgFIAFgHIADgGIACgGIABgDIA5AsIgCADIgEAGIgGAIIgIAJIgJAIQgWASgdABg");
        this.shape_15.setTransform(165.5,-143.3);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#231916").s().p("AgNAsQgkgEgWgXIAugzQAFAMALAAIACAAQAHAAAEgDIAFgFIAFgHIADgHIA3AsIgGAJIgIAIIgJAIQgXASgcABIgFABIgGgBg");
        this.shape_16.setTransform(162.1,-142.8);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#231916").s().p("AACA5QgjgEgXgXQgQgSgJgbQgFgTgBgPIBJgIIAAAPQABANADAIQAGAMAJAAIADAAQAGAAAGgDIAFgFIAFgHIADgHIA3AsIgHAJIgHAIIgJAIQgXASgdABIgGABIgFgBg");
        this.shape_17.setTransform(160.6,-144.1);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#231916").s().p("AAFBkQgjgEgWgXQgQgSgJgcQgFgTgCgOIAAgFQgBgJABgPQACgiALgeIBDAlIgFAVIgCAbIAAAOQABANAEAIQAFAMAKAAIADAAQAGAAAFgDIAGgFIAEgHIA0AvIgIAIIgJAIQgXASgdABIgFAAIgGAAg");
        this.shape_18.setTransform(160.2,-148.4);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#231916").s().p("AAJCLQgjgEgWgXQgQgSgJgcQgFgTgCgQIAAgFQgBgJABgOQACgiALgeIAEgLQAVg1AqgNIAZBAQgPAGgJAdIgGAlIgCAaIAAAPQABANAEAIQAEALALABIADAAQAGAAAFgEIAGgFIAwAxIgJAIQgXASgdABIgFAAIgGAAg");
        this.shape_19.setTransform(159.8,-152.3);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#231916").s().p("AgKCNQgkgEgXgXQgQgSgJgcQgFgTgBgQIAAgFQgBgJABgOQABgiAMgeIADgLQAWg1AqgNQARgFAVABQAiAEAXAZQAUAXAGAmIhEAOQgBgRgEgIQgFgLgNgBIgGABQgNAGgJAdIgHAlIgCAaIAAAPQABANADAIQAGALAKABIADAAIAFgBIApA4QgTALgXABIgFAAIgFAAg");
        this.shape_20.setTransform(161.9,-152.5);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#231916").s().p("AgMCNQgkgEgWgXQgRgSgIgcQgGgTgBgQIAAgFQgBgJABgOQACgiALgeIAEgLQAVg1AqgNQASgFAUABQAjAEAWAZQAUAXAHAmIABAGQAEAcgEAeIhHgQIACgcIgBgGQgBgRgEgIQgFgLgNgBIgFABQgOAGgJAdIgHAlIgCAaIAAAPQABANAEAIQAFALALABIACAAIACAAIAhA8QgPAGgPABIgFAAIgGAAg");
        this.shape_21.setTransform(162,-152.5);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#231916").s().p("AgMCNQgkgEgWgXQgRgSgIgcQgGgTgBgQIAAgFQgBgJABgOQACgiALgeIAEgLQAVg1AqgNQASgFAUABQAjAEAWAZQAUAXAHAmIABAGQAEAcgEAeIgEAVQgEAUgHARIgDAIIg8grIACgJIAEgSIADgoIgBgGQgBgRgEgIQgFgLgNgBIgFABQgOAGgJAdIgHAlIgCAaIAAAPQABANAEAIQAFALALABIACAAIAVBBIgQACIgFAAIgGAAg");
        this.shape_22.setTransform(162,-152.5);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#231916").s().p("AgMCNIgHgBQgfgGgUgUQgRgSgIgcQgGgTgBgQIAAgFQgBgJABgOQACgiALgeIAEgLQAVg1AqgNQASgFAUABQAjAEAWAZQAUAXAHAmIABAGQAEAcgEAeIgEAVQgEAUgHARIgDAIIgEAHIgCADIgEAHIg3gtIACgGIABgDIACgGIACgJIAEgSIADgoIgBgGQgBgRgEgIQgFgLgNgBIgFABQgOAGgJAdIgHAlIgCAaIAAAPQABANAEAIQACAEADADQAEAEAGABIABAAIAHBDIgIAAIgDAAg");
        this.shape_23.setTransform(162,-152.5);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#231916").s().p("AgMCNIgFgBIgCAAQgfgGgUgUQgRgSgIgcQgGgTgBgQIAAgFQgBgJABgOQACgiALgeIAEgLQAVg1AqgNQASgFAUABQAjAEAWAZQAUAXAHAmIABAGQAEAcgEAeIgEAVQgEAUgHARIgDAIIgEAHIgCADIgEAHIgGAIIgIAJIgxgxIAFgHIADgGIACgGIABgDIACgGIACgJIAEgSIADgoIgBgGQgBgRgEgIQgFgLgNgBIgFABQgOAGgJAdIgHAlIgCAaIAAAPQABANAEAIQACAEADADQAEAEAFABIABAAIAABDIgDAAg");
        this.shape_24.setTransform(162,-152.5);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#231916").s().p("AgMCNIgFgBIgCAAQgfgGgUgUQgRgSgIgcQgGgTgBgQIAAgFQgBgJABgOQACgiALgeIAEgLQAVg1AqgNQASgFAUABQAjAEAWAZQAUAXAHAmIABAGQAEAcgEAeIgEAVQgEAUgHARIgDAIIgEAHIgCADIgEAHIgGAIIgIAJIgJAIIgKAHIgog4IAFgDIAFgFIAFgHIADgGIACgGIABgDIACgGIACgJIAEgSIADgoIgBgGQgBgRgEgIQgFgLgNgBIgFABQgOAGgJAdIgHAlIgCAaIAAAPQABANAEAIQACAEADADQAEAEAFABIABAAIABAAIACAAIAVBBIgQACIgIAAIgDAAg");
        this.shape_25.setTransform(162,-152.5);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#231916").s().p("AgMCNIgFgBIgCAAQgfgGgUgUQgRgSgIgcQgGgTgBgQIAAgFQgBgJABgOQACgiALgeIAEgLQAVg1AqgNQASgFAUABQAjAEAWAZQAUAXAHAmIABAGQAEAcgEAeIgEAVQgEAUgHARIgDAIIgEAHIgCADIgEAHIgGAIIgIAJIgJAIIgKAHIgLAFIgOAFIgQACIgIAAIgDAAgAADhIQgOAGgJAdIgHAlIgCAaIAAAPQABANAEAIQACAEADADQAEAEAFABIABAAIABAAIACAAIAAAAIACAAIAEgBIAFgDIAFgFIAFgHIADgGIACgGIABgDIACgGIACgJIAEgSIADgoIgBgGQgBgRgEgIQgFgLgNgBIgFABg");
        this.shape_26.setTransform(162,-152.5);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12}]},35).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[]},11).wait(1));

        // c
        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#231916").s().p("AgegEIACgHQA8ANgCACIgBAIg");
        this.shape_27.setTransform(146.7,-148.2);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#231916").s().p("AggAAIAAgBIAHgSQA7AOgBABIgBAHIgFARg");
        this.shape_28.setTransform(146.4,-147.4);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#231916").s().p("AgvgVQAIADAIgEQAJgEAFgJIAAgBIAHgSQA7AOgBABIgBAIIgFARQgEAMgHALQgZAqguAEg");
        this.shape_29.setTransform(144.9,-143.9);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#231916").s().p("AgEA8QgYAAgegVQgZgXgIgmIBEglIACAQQADAQAKAIIAFAEQAHADAJgEQAJgFAFgJIAAgBIAGgSQA9AOgCACIgBAIIgEAQQgFALgHAMQgZAqguAEIgIAAg");
        this.shape_30.setTransform(140.5,-144.4);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#231916").s().p("AgBBnQgZAAgdgWQgZgWgJgnQgFgXABgeIACgYQAFgXAIgWIBCAaQgFAMgDARIAAAeIACAQQADAQAKAIIAFADQAHAEAIgFQAJgEAFgJIAAgBIAHgRQA8ANgBACIgBAHIgFARQgEAMgHAMQgZAqgvAEIgHAAg");
        this.shape_31.setTransform(140.2,-148.7);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#231916").s().p("AgBCMQgYAAgegWQgZgXgIgmQgGgYABgeIADgXQAEgYAJgVIAFgNQAbg2AvgHIAPBEQgIAAgJAIQgGAJgGAPQgEAMgDARIgBAdIACAQQADAQAKAJIAFADQAHADAJgEQAJgEAFgJIAAgBIAEgMIA8ARIgEARQgFAMgHAMQgZAqguAEIgIAAg");
        this.shape_32.setTransform(140.2,-152.4);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#231916").s().p("AAACMQgXAAgegWQgZgWgIgnQgGgYABgeIADgXQAEgXAJgWIAFgMQAbg3AvgHIAFAAQA6gFAZAzIg4AjIgCgDQgHgJgIAAQgIgBgJAJQgGAIgGAPQgEAMgDARIgBAdIACAQQADARAKAIIAEADQAIAEAJgFQAJgEAFgJIA8AVQgFAMgHAMQgZAqguAEIgJAAg");
        this.shape_33.setTransform(140,-152.4);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#231916").s().p("AgFCMQgZAAgdgWQgZgWgJgnQgFgYABgeIACgXQAFgXAIgWIAFgMQAcg3AvgHIAFAAQA6gFAZAzIABACQAMAaAAAcIg+ALIgCgRQgCgIgDgHIgCgDQgIgJgHAAQgJgBgHAJQgIAIgFAPQgFAMgDARIAAAdIACAQQADARAKAIIAFADQAHAEAIgFQAJgEAFgJIAAgBIAFgMIA8ARIgFARQgEAMgHAMQgZAqgvAEIgHAAg");
        this.shape_34.setTransform(140.6,-152.4);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#231916").s().p("AgFCMQgZAAgdgWQgZgWgJgnQgFgYABgeIACgXQAFgXAIgWIAFgMQAcg3AvgHIAFAAQA6gFAZAzIABACQAMAaAAAcIg+ALIgCgRQgCgIgDgHIgCgDQgIgJgHAAQgJgBgHAJQgIAIgFAPQgFAMgDARIAAAdIACAQQADARAKAIIAFADQAHAEAIgFQAJgEAFgJIAAgBIAHgSQA8AOgBACIgBAHIgFARQgEAMgHAMQgZAqgvAEIgHAAg");
        this.shape_35.setTransform(140.6,-152.4);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_27}]},32).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[]},20).wait(1));

        // .
        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f("#231916").s().p("AgQAIIABgPIAgAAIgBAPg");
        this.shape_36.setTransform(123.3,-149.2);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#231916").s().p("AgaAIIACgPIAzAAIgCAPg");
        this.shape_37.setTransform(123.4,-144.2);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f("#231916").s().p("AggAIIACgPIA/AAIgCAPg");
        this.shape_38.setTransform(123.3,-139.2);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#231916").s().p("AgiASIAFgjIBAAAIgFAjg");
        this.shape_39.setTransform(123.5,-140.2);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f("#231916").s().p("AgjAZIAHgxIA/AAIgGAxg");
        this.shape_40.setTransform(123.6,-140.9);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_36}]},29).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[]},27).wait(1));

        // a
        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#231916").s().p("AglANIAAgZIBLAAIgCAZg");
        this.shape_41.setTransform(111.8,-139.7);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f("#231916").s().p("AgnArIAAgwIgCAEIAFgpIBOAAIgIBVg");
        this.shape_42.setTransform(112,-142.7);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#231916").s().p("AgrBdIAAgxIgCAEIAGgxQAEgPABgUIAIg2IAAgBIAAgBIBIAAIgQC5g");
        this.shape_43.setTransform(112.4,-147.7);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f("#231916").s().p("AgsCKIAAgxIgCAEIAGgyQAEgPABgUIAIg1IAAgBIAAgBQACgJgIgKQgFgGgHgDIAjg+QAiAKAPAfQAJAUgCARIgRDFg");
        this.shape_44.setTransform(112.5,-152.2);

        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f("#231916").s().p("AgNCMIAAgwIgBADIAFgyQAFgPAAgTIAHg2IAAAAIABgCQABgIgGgKQgGgHgHgCQgFgDgGAAQgLAAgIAJIghg1QAegXAtADQAMABALAEQAiAKAQAfQAJATgDASIgRDEg");
        this.shape_45.setTransform(109.4,-152.4);

        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f("#231916").s().p("AgeBKIADACQALAEALgLQAFgEAEgIIACgDIADgJQAFgPAAgTIAIg2IAAAAIABgCQABgIgHgKQgGgHgHgCQgEgDgGAAQgLAAgIAJQgFAFgDAKQgUgDgrgMQAGgTAQgTQAIgJAIgGQAegXAsADQANABALAEQAiAKAQAfQAJATgDASIgRDEIhKAAIAAgwIgBADQgKAUgSAOQgOAKgOACg");
        this.shape_46.setTransform(107.5,-152.4);

        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f("#231916").s().p("Ag3CMQgVgFgQgUQgOgRgBgeIAAgFIBSgZQgGAPAFANQABAEAGAEIADACQALAEAKgLQAFgEAFgIIACgDIADgJQAFgPAAgTIAIg2IAAAAIABgCQABgIgHgKQgGgHgHgCQgFgDgGAAQgKAAgIAJQgFAFgDAKQgUgDgrgMQAGgTAQgTQAIgJAIgGQAegXAsADQANABALAEQAiAKAQAfQAJATgDASIgRDEIhKAAIAAgwIgBADQgLAUgRAOQgOAKgOACIgEAAIgKgBg");
        this.shape_47.setTransform(106.4,-152.4);

        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f("#231916").s().p("Ag3CMQgVgFgQgUQgOgRgBgeIAAgFQAAgsAWgUQATgXAigJIAZAxQgJAGgGAKIgDAGQgGAPAFANQABAEAGAEIADACQALAEAKgLQAFgEAFgIIACgDIADgJQAFgPAAgTIAIg2IAAAAIABgCQABgIgHgKQgGgHgHgCQgFgDgGAAQgKAAgIAJQgFAFgDAKQgUgDgrgMQAGgTAQgTQAIgJAIgGQAegXAsADQANABALAEQAiAKAQAfQAJATgDASIgRDEIhKAAIAAgwIgBADQgLAUgRAOQgOAKgOACIgEAAIgKgBg");
        this.shape_48.setTransform(106.4,-152.4);

        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f("#231916").s().p("Ag3CMQgVgFgQgUQgOgRgBgeIAAgFQAAgsAWgUQATgXAigJIAUgEIAegCQANAAACgEIAAAAIABgCQABgIgHgKQgGgHgHgCQgFgDgGAAQgKAAgIAJQgFAFgDAKQgUgDgrgMQAGgTAQgTQAIgJAIgGQAegXAsADQANABALAEQAiAKAQAfQAJATgDASIgRDEIhKAAIAAgwIgBADQgLAUgRAOQgOAKgOACIgEAAIgKgBgAgHAQQgJAGgGAKIgDAGQgGAPAFANQABAEAGAEIADACQALAEAKgLQAFgEAFgIIACgDIADgJQAFgPAAgTIAAgDQgUAAgMAIg");
        this.shape_49.setTransform(106.4,-152.4);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_41}]},27).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[]},25).wait(1));

        // n
        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f("#231916").s().p("AgmASIAEgjIBKAAIgGAjg");
        this.shape_50.setTransform(77.1,-140.2);

        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f("#231916").s().p("AgsA6IAPhzIBKAAIgQBzg");
        this.shape_51.setTransform(77.6,-144.2);

        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f("#231916").s().p("AgyBxIAcjhIBJAAIgBAlIgEANIgXCvg");
        this.shape_52.setTransform(78.2,-149.7);

        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f("#231916").s().p("AhpCMIAikXIBGAAIgDArIAAgBQAKgTANgKQASgOARABQAWAAAPAOQALAKAEAQIhJAsQgEgNgKAAQgRgBgFAQIgFATIgXCug");
        this.shape_53.setTransform(83.8,-152.4);

        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f("#231916").s().p("AhqCMIAikXIBGAAIgDArIAAgBQAKgTANgKQASgOARABQAWAAAPAOQALAKAEAQIABAGQADAUgEAeIgIBDIhJAAIAHg5QADgNgCgGIAAgDQgEgNgKAAQgRgBgFAQIgFATIgXCug");
        this.shape_54.setTransform(83.9,-152.4);

        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f("#231916").s().p("AhqCMIAikXIBGAAIgDArIAAgBQAKgTANgKQASgOARABQAWAAAPAOQALAKAEAQIABAGQADAUgEAeIgQB/IhJAAIAPh1QADgNgCgGIAAgDQgEgNgKAAQgRgBgFAQIgFATIgXCug");
        this.shape_55.setTransform(83.9,-152.4);

        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f("#231916").s().p("AAJCMIAWitQADgNgCgGIAAgDQgEgNgKAAQgRgBgFAQIgFATIgXCuIhKAAIAikXIBGAAIgDArIAAgBQAKgTANgKQASgOARABQAWAAAPAOQALAKAEAQIABAGQADAUgEAeIgXC3g");
        this.shape_56.setTransform(83.9,-152.4);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_50}]},25).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[]},29).wait(1));

        // .
        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f("#231916").s().p("AgJAJIAAgRIATAAIgBARg");
        this.shape_57.setTransform(66.1,-143.1);

        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f("#231916").s().p("AgTAJIABgRIAmAAIgBARg");
        this.shape_58.setTransform(67.1,-151.1);

        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f("#231916").s().p("AgWAdIAEg5IApAAIgEA5g");
        this.shape_59.setTransform(68.8,-164.6);

        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f("#231916").s().p("AgrAkIAJhHIBNAAIgJBHg");
        this.shape_60.setTransform(69.6,-176.8);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_57}]},23).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60,p:{y:-176.8}}]},1).to({state:[{t:this.shape_60,p:{y:-173.8}}]},1).to({state:[{t:this.shape_60,p:{y:-171.8}}]},1).to({state:[]},32).wait(1));

        // i
        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f("#231916").s().p("AgnANIAEgZIBLAAIgDAZg");
        this.shape_61.setTransform(65.6,-139.7);

        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f("#231916").s().p("AgsA1IANhpIBMAAIgNBpg");
        this.shape_62.setTransform(66.1,-143.7);

        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f("#231916").s().p("AgzBsIAajXIBNAAIgbDXg");
        this.shape_63.setTransform(66.8,-149.2);

        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f("#231916").s().p("Ag3CNIAikZIBNAAIgkEZg");
        this.shape_64.setTransform(67.2,-152.5);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_61}]},23).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[]},34).wait(1));

        // h
        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f("#231916").s().p("AgnASIAFgjIBKAAIgFAjg");
        this.shape_65.setTransform(43.2,-140.2);

        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f("#231916").s().p("AgtBEIARiHIBKAAIgSCHg");
        this.shape_66.setTransform(43.8,-145.2);

        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f("#231916").s().p("Ag0B7IAfj1IBKAAIgBAFIABAAIgFAxIgEAQIAAABIgXCug");
        this.shape_67.setTransform(44.6,-150.7);

        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f("#231916").s().p("Ag5CjIAqlFIBJAAIgKBVIABAAIgGAxIgDAQIAAABIgYCug");
        this.shape_68.setTransform(45,-154.7);

        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f("#231916").s().p("AhmC4IAvlvIBIAAIgOCAIAAgBIABgDIABgBIAAgBQAHgOAJgHQATgOASABQAWAAAPAOQAFAEADAGIhDA8QgEgNgLAAQgOgBgHAMIgBAEIAAACIgEAQIAAAAIgXCvg");
        this.shape_69.setTransform(49.5,-156.8);

        this.shape_70 = new cjs.Shape();
        this.shape_70.graphics.f("#231916").s().p("AhrC4IAwlvIBIAAIgOCAIABgBIAAgDIABgBIAAgBQAHgOAJgHQASgOASABQAWAAAPAOQAFAEAEAGQAFAKACAMQAEAUgFAdIgGAwIhIAAIAFgmQABgNgBgFIgBgDQgDgNgLAAQgOgBgGAMIgCAEIgBACIgDAQIAAAAIgXCvg");
        this.shape_70.setTransform(50,-156.8);

        this.shape_71 = new cjs.Shape();
        this.shape_71.graphics.f("#231916").s().p("AhrC4IAwlvIBIAAIgOCAIABgBIAAgDIABgBIAAgBQAHgOAJgHQASgOASABQAWAAAPAOQAFAEAEAGQAFAKACAMQAEAUgFAdIgRCKIhIAAIAQiAQABgNgBgFIgBgDQgDgNgLAAQgOgBgGAMIgCAEIgBACIgDAQIAAAAIgXCvg");
        this.shape_71.setTransform(50,-156.8);

        this.shape_72 = new cjs.Shape();
        this.shape_72.graphics.f("#231916").s().p("AAKC4IAWiuQABgNgBgFIgBgDQgDgNgLAAQgOgBgGAMIgCAEIgBACIgDAQIAAAAIgXCvIhLAAIAwlvIBIAAIgOCAIABgBIAAgDIABgBIAAgBQAHgOAJgHQASgOASABQAWAAAPAOQAFAEAEAGQAFAKACAMQAEAUgFAdIgWC4g");
        this.shape_72.setTransform(50,-156.8);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_65}]},21).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[]},32).wait(1));

        // c
        this.shape_73 = new cjs.Shape();
        this.shape_73.graphics.f("#231916").s().p("AghgLIABgFIBCASIgFAPg");
        this.shape_73.setTransform(34.4,-150.8);

        this.shape_74 = new cjs.Shape();
        this.shape_74.graphics.f("#231916").s().p("AgtgGQAHgGAFgKIAIgTIAEgOIACgFIBBATIgEAPIgKAXIgHAQQgPAfgSARg");
        this.shape_74.setTransform(33.2,-146.4);

        this.shape_75 = new cjs.Shape();
        this.shape_75.graphics.f("#231916").s().p("AhZAaQgLgRgHgXIBHgxIAAAKQAIAcAIAJQALAMANgFQAGgDAFgDQAHgHAFgJIAIgUIAEgOIACgEIBCASIgEAPIgKAYIgHAQQgPAegTARQgZATgfAAQg4AAgdgsg");
        this.shape_75.setTransform(27.1,-145.4);

        this.shape_76 = new cjs.Shape();
        this.shape_76.graphics.f("#231916").s().p("AhTBVQgLgRgGgYQgLgmAEg1IAEgjQAEgZAHgVIBJAaQgGASgDASQgFAfADAfIABAJQAHAcAIAJQALALANgEQAGgDAFgEQAIgGAEgKIAIgTIAFgNIA/AcIgJAXIgIARQgOAfgUARQgYATghAAQg3AAgdgsg");
        this.shape_76.setTransform(26.4,-151.3);

        this.shape_77 = new cjs.Shape();
        this.shape_77.graphics.f("#231916").s().p("AhPCEQgLgSgGgXQgKgnADg0IAFgjQAEgZAHgVIAFgQQAWg3AjgXIAvBAQgGACgGAEQgIAKgHAMQgGAOgEAOQgFARgEATQgEAeACAfIABAJQAIAdAHAJQALALAOgFQAGgCAEgEQAIgGAFgKIAIgTIA6AmIgHARQgPAfgUARQgYATggAAQg4AAgdgsg");
        this.shape_77.setTransform(26,-156);

        this.shape_78 = new cjs.Shape();
        this.shape_78.graphics.f("#231916").s().p("AhSCMQgLgRgGgYQgLgmAEg2IAEghQAEgZAHgWIAGgPQAVg3AjgXQASgNAVgDQBEgIAeAwIg5A5QgFgNgIgDQgKgEgKADQgGABgGAFQgHAKgHAMQgGANgEAOQgGASgDASQgFAeADAfIABAKQAHAcAIAJQALAMANgFQAGgDAFgDQAIgHAEgJIAIgUIA7AnIgIARQgOAegUARQgYATghAAQg3AAgdgsg");
        this.shape_78.setTransform(26.3,-156.8);

        this.shape_79 = new cjs.Shape();
        this.shape_79.graphics.f("#231916").s().p("AheCMQgLgRgGgYQgLgmAEg2IAEghQAFgZAHgWIAFgPQAVg3AjgXQASgNAWgDQBDgIAeAwQAHALAFAOQAOAogDAlIhKAAQABgbgDgJIgEgJQgFgNgIgDQgKgEgJADQgHABgFAFQgHAKgIAMQgGANgEAOQgGASgDASQgEAeACAfIABAKQAHAcAIAJQAMAMANgFQAFgDAFgDQAIgHAFgJIAHgUIAFgOIA/AdIgJAYIgIARQgOAegUARQgYATggAAQg4AAgdgsg");
        this.shape_79.setTransform(27.5,-156.8);

        this.shape_80 = new cjs.Shape();
        this.shape_80.graphics.f("#231916").s().p("AheCMQgLgRgGgYQgLgmAEg2IAEghQAFgZAHgWIAFgPQAVg3AjgXQASgNAWgDQBDgIAeAwQAHALAFAOQAOAogDAlIhKAAQABgbgDgJIgEgJQgFgNgIgDQgKgEgJADQgHABgFAFQgHAKgIAMQgGANgEAOQgGASgDASQgEAeACAfIABAKQAHAcAIAJQAMAMANgFQAFgDAFgDQAIgHAFgJIAHgUIAFgOIABgEIBDASIgFAPIgJAYIgIARQgOAegUARQgYATggAAQg4AAgdgsg");
        this.shape_80.setTransform(27.5,-156.8);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_73}]},19).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[]},34).wait(1));

        // -
        this.shape_81 = new cjs.Shape();
        this.shape_81.graphics.f("#231916").s().p("AgKAZIAGgyIAPAAIgJAyg");
        this.shape_81.setTransform(0.9,-150.9);

        this.shape_82 = new cjs.Shape();
        this.shape_82.graphics.f("#231916").s().p("AgjAZIAGgyIBBAAIgKAyg");
        this.shape_82.setTransform(3.5,-150.9);

        this.shape_83 = new cjs.Shape();
        this.shape_83.graphics.f("#231916").s().p("Ag5AZIAGgyIBsAAIgHAyg");
        this.shape_83.setTransform(5.6,-150.9);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_81}]},17).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[]},41).wait(1));

        // n
        this.shape_84 = new cjs.Shape();
        this.shape_84.graphics.f("#231916").s().p("AgmASIAEgjIBKAAIgGAjg");
        this.shape_84.setTransform(-20.9,-140.2);

        this.shape_85 = new cjs.Shape();
        this.shape_85.graphics.f("#231916").s().p("AgsA6IAPhzIBKAAIgQBzg");
        this.shape_85.setTransform(-20.4,-144.2);

        this.shape_86 = new cjs.Shape();
        this.shape_86.graphics.f("#231916").s().p("AgyBxIAcjhIBJAAIgBAlIgEANIgXCvg");
        this.shape_86.setTransform(-19.8,-149.7);

        this.shape_87 = new cjs.Shape();
        this.shape_87.graphics.f("#231916").s().p("AhpCMIAikXIBGAAIgDArIAAgBQAKgTANgKQASgOARABQAWAAAPAOQALAKAEAQIhJAsQgEgNgKAAQgRgBgFAQIgFATIgXCug");
        this.shape_87.setTransform(-14.2,-152.4);

        this.shape_88 = new cjs.Shape();
        this.shape_88.graphics.f("#231916").s().p("AhqCMIAikXIBGAAIgDArIAAgBQAKgTANgKQASgOARABQAWAAAPAOQALAKAEAQIABAGQADAUgEAeIgIBDIhJAAIAHg5QADgNgCgGIAAgDQgEgNgKAAQgRgBgFAQIgFATIgXCug");
        this.shape_88.setTransform(-14.1,-152.4);

        this.shape_89 = new cjs.Shape();
        this.shape_89.graphics.f("#231916").s().p("AhqCMIAikXIBGAAIgDArIAAgBQAKgTANgKQASgOARABQAWAAAPAOQALAKAEAQIABAGQADAUgEAeIgQB/IhJAAIAPh1QADgNgCgGIAAgDQgEgNgKAAQgRgBgFAQIgFATIgXCug");
        this.shape_89.setTransform(-14.1,-152.4);

        this.shape_90 = new cjs.Shape();
        this.shape_90.graphics.f("#231916").s().p("AAJCMIAWitQADgNgCgGIAAgDQgEgNgKAAQgRgBgFAQIgFATIgXCuIhKAAIAikXIBGAAIgDArIAAgBQAKgTANgKQASgOARABQAWAAAPAOQALAKAEAQIABAGQADAUgEAeIgXC3g");
        this.shape_90.setTransform(-14.1,-152.4);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_84}]},15).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[]},39).wait(1));

        // .
        this.shape_91 = new cjs.Shape();
        this.shape_91.graphics.f("#231916").s().p("AgJAJIAAgRIATAAIAAARg");
        this.shape_91.setTransform(-31.9,-143.1);

        this.shape_92 = new cjs.Shape();
        this.shape_92.graphics.f("#231916").s().p("AgTAJIACgRIAlAAIgBARg");
        this.shape_92.setTransform(-30.9,-151.1);

        this.shape_93 = new cjs.Shape();
        this.shape_93.graphics.f("#231916").s().p("AgWAdIAEg5IApAAIgEA5g");
        this.shape_93.setTransform(-29.2,-164.6);

        this.shape_94 = new cjs.Shape();
        this.shape_94.graphics.f("#231916").s().p("AgqAkIAJhHIBMAAIgJBHg");
        this.shape_94.setTransform(-28.4,-171.8);
        this.shape_94._off = true;

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_91}]},13).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_94}]},1).to({state:[]},41).wait(1));
        this.timeline.addTween(cjs.Tween.get(this.shape_94).wait(16).to({_off:false},0).wait(1).to({x:-27.4,y:-176.8},0).wait(1).to({x:-28.4,y:-173.8},0).wait(1).to({y:-171.8},0).to({_off:true},41).wait(1));

        // i
        this.shape_95 = new cjs.Shape();
        this.shape_95.graphics.f("#231916").s().p("AgnANIAEgZIBLAAIgEAZg");
        this.shape_95.setTransform(-32.4,-139.7);

        this.shape_96 = new cjs.Shape();
        this.shape_96.graphics.f("#231916").s().p("AgsA1IANhpIBMAAIgOBpg");
        this.shape_96.setTransform(-31.9,-143.7);

        this.shape_97 = new cjs.Shape();
        this.shape_97.graphics.f("#231916").s().p("AgzBsIAajXIBNAAIgcDXg");
        this.shape_97.setTransform(-31.2,-149.2);

        this.shape_98 = new cjs.Shape();
        this.shape_98.graphics.f("#231916").s().p("Ag3CNIAikZIBNAAIgkEZg");
        this.shape_98.setTransform(-30.8,-152.5);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_95}]},13).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[]},44).wait(1));

        // -
        this.shape_99 = new cjs.Shape();
        this.shape_99.graphics.f("#231916").s().p("AgJAZIAFgyIAOAAIgHAyg");
        this.shape_99.setTransform(-49.3,-150.9);

        this.shape_100 = new cjs.Shape();
        this.shape_100.graphics.f("#231916").s().p("AgqAZIAGgyIBPAAIgMAyg");
        this.shape_100.setTransform(-46,-150.9);

        this.shape_101 = new cjs.Shape();
        this.shape_101.graphics.f("#231916").s().p("Ag4AZIAFgyIBsAAIgGAyg");
        this.shape_101.setTransform(-44.6,-150.9);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_99}]},12).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[]},46).wait(1));

        // e
        this.shape_102 = new cjs.Shape();
        this.shape_102.graphics.f("#231916").s().p("AgKgaIAaAAIgHAzIgYACg");
        this.shape_102.setTransform(-65.8,-153);

        this.shape_103 = new cjs.Shape();
        this.shape_103.graphics.f("#231916").s().p("AgogZIBWgBIgHAwIg7ADIgZACg");
        this.shape_103.setTransform(-62.7,-153);

        this.shape_104 = new cjs.Shape();
        this.shape_104.graphics.f("#231916").s().p("Ag+gZIB/gBQAEAZgCAXIgyAAIg7ADIgYACg");
        this.shape_104.setTransform(-60.6,-153);

        this.shape_105 = new cjs.Shape();
        this.shape_105.graphics.f("#231916").s().p("Ag+gOIA7gBQACgLgCgLIAAgBIBAAAIAEAXQAEAYgCAYIgyABIg7ADIgYABg");
        this.shape_105.setTransform(-60.6,-154.1);

        this.shape_106 = new cjs.Shape();
        this.shape_106.graphics.f("#231916").s().p("Ag+AbIA7gBQACgLgCgMIAAAAQgEgTgOgFIAOg6QAwALATBCIABAFIAEAXQAEAZgCAYIgyAAIg7ADIgYACg");
        this.shape_106.setTransform(-60.6,-158.3);

        this.shape_107 = new cjs.Shape();
        this.shape_107.graphics.f("#231916").s().p("AgfAcIA6gBQACgLgCgLIAAgBQgEgTgOgFIgHgBQgRAAgKAYIgDAKIhGgHQAHgQALgTQAggzAxAAQAMAAAKACQAyALASBCIABAFIAFAXQADAZgCAYIgyABIg7ADIgYABg");
        this.shape_107.setTransform(-63.7,-158.4);

        this.shape_108 = new cjs.Shape();
        this.shape_108.graphics.f("#231916").s().p("AhmBVIgDgXQABgdADgTQAEgRADgIIADgHQAHgRALgTQAgg0AxAAQALAAALADQAxALATBCIABAGIAEAWQAEAYgCAZIgyAAIg7ADIgYACIgBAAIAAADQgCAOADALIACAHIhGAQIgGgWgAgSgVIgEAJIgCAMIgBACIA7AAQACgKgCgMIAAAAQgEgUgOgFIgHgCQgRAAgKAag");
        this.shape_108.setTransform(-64.4,-155.9);

        this.shape_109 = new cjs.Shape();
        this.shape_109.graphics.f("#231916").s().p("AhZBYIgHgPIgGgWIgDgXQABgcADgTQAEgSADgIIADgHQAHgRALgTQAgg0AxAAQALAAALADQAxALATBCIABAGIAEAXQAEAYgCAYIgyAAIg7ADIgYACIgBAAIAAADQgCAOADALIACAHQAEAJAGAFQALAJAMgIIAcA9QgRAIgTAAIgFAAQg2AAgdg1gAgSg3IgEAJIgCAMIgBADIA7AAQACgLgCgMIAAAAQgEgUgOgFIgHgCQgRAAgKAag");
        this.shape_109.setTransform(-64.4,-152.5);

        this.shape_110 = new cjs.Shape();
        this.shape_110.graphics.f("#231916").s().p("AhZBYIgHgPIgGgWIgDgXQABgcADgTQAEgSADgIIADgHQAHgRALgTQAgg0AxAAQALAAALADQAxALATBCIABAGIAEAXQAEAYgCAYIgyAAIg7ADIgYACIgBAAIAAADQgCAOADALIACAHQAEAJAGAFQALAJAMgIQAMgIAOgWIAaAGQARAFATADQgXA7glASQgRAIgTAAIgFAAQg2AAgdg1gAgSg3IgEAJIgCAMIgBADIA7AAQACgLgCgMIAAAAQgEgUgOgFIgHgCQgRAAgKAag");
        this.shape_110.setTransform(-64.4,-152.5);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_102}]},10).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[]},42).wait(1));

        // d
        this.shape_111 = new cjs.Shape();
        this.shape_111.graphics.f("#231916").s().p("AgjASIACgjIBEAAIgEAjg");
        this.shape_111.setTransform(-82.6,-140.2);

        this.shape_112 = new cjs.Shape();
        this.shape_112.graphics.f("#231916").s().p("AgnA1IAJhpIBGAAIgNBpg");
        this.shape_112.setTransform(-82.2,-143.7);

        this.shape_113 = new cjs.Shape();
        this.shape_113.graphics.f("#231916").s().p("AgtBnIASjNIBJAAIgZDNg");
        this.shape_113.setTransform(-81.6,-148.7);

        this.shape_114 = new cjs.Shape();
        this.shape_114.graphics.f("#231916").s().p("AgzCZIAWj1IABACIAIg+IBIAAIglExg");
        this.shape_114.setTransform(-81,-153.7);

        this.shape_115 = new cjs.Shape();
        this.shape_115.graphics.f("#231916").s().p("AgfC4IAEgxIgCADIAAACQgEAJgKAQQgKAMgKAEQgGACgJABIAXhFIAEAAQAQAAAJglQADgNACgTIACgZIACgGIAAABIABgBIAHhLIAAABIAQh8IBIAAIgtFvg");
        this.shape_115.setTransform(-83,-156.8);

        this.shape_116 = new cjs.Shape();
        this.shape_116.graphics.f("#231916").s().p("AACC4IAFgxIgCADIgBACQgDAJgJAQQgLAMgJAEQgGACgJABIgLAAQgMAAgQgMQgWgUgIgsIgBgLIBFgeQABAWAJAPQAFAHAGADIADABIAEAAQAPAAAJglQACgNACgTIADgZIACgGIAAABIABgBIAHhLIAAABIARh8IBIAAIgtFvg");
        this.shape_116.setTransform(-86.4,-156.8);

        this.shape_117 = new cjs.Shape();
        this.shape_117.graphics.f("#231916").s().p("AADC4IAFgxIgCADIgBACQgDAJgKAQQgKAMgKAEQgFACgJABIgLAAQgMAAgRgMQgVgUgIgsIgBgLIgBgXIADgiQAEgoANgeIA9AlQgFANgDARQgDAQAAAOQABAWAJAPQAFAHAGADIADABIAEAAQAPAAAIglQADgNACgTIACgZIADgGIAAABIABgBIAGhLIABABIARh8IBHAAIgsFvg");
        this.shape_117.setTransform(-86.5,-156.8);

        this.shape_118 = new cjs.Shape();
        this.shape_118.graphics.f("#231916").s().p("AADC4IAFgxIgCADIgBACQgDAJgKAQQgKAMgKAEQgFACgJABIgLAAQgMAAgRgMQgVgUgIgsIgBgLIgBgXIADgiQAEgoANgeQAKgYAOgRQANgPAMgFQAJgEALgBIABAAIAQBGIgBAAIgHAEQgKAMgHARQgFANgDARQgDAQAAAOQABAWAJAPQAFAHAGADIADABIAEAAQAPAAAIglQADgNACgTIACgZIADgGIAAABIABgBIAGhLIABABIARh8IBHAAIgsFvg");
        this.shape_118.setTransform(-86.5,-156.8);

        this.shape_119 = new cjs.Shape();
        this.shape_119.graphics.f("#231916").s().p("AADC4IAFgxIgCADIgBACQgDAJgKAQQgKAMgKAEQgFACgJABIgLAAQgMAAgRgMQgVgUgIgsIgBgLIgBgXIADgiQAEgoANgeQAKgYAOgRQANgPAMgFQAJgEALgBIABAAQALAAAJADIAHAFQAOAMAHAQIABABIARh8IBHAAIgsFvgAgPgWQgKAMgHARQgFANgDARQgDAQAAAOQABAWAJAPQAFAHAGADIADABIAEAAQAPAAAIglQADgNACgTIACgZQACgXAAgGQgFgTgNgBIgGACIgBAAg");
        this.shape_119.setTransform(-86.5,-156.8);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_111}]},8).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[]},44).wait(1));

        // a
        this.shape_120 = new cjs.Shape();
        this.shape_120.graphics.f("#231916").s().p("AglANIAAgZIBLAAIgCAZg");
        this.shape_120.setTransform(-105.2,-139.7);

        this.shape_121 = new cjs.Shape();
        this.shape_121.graphics.f("#231916").s().p("AgnArIAAgwIgCAEIAFgpIBNAAIgHBVg");
        this.shape_121.setTransform(-105,-142.7);

        this.shape_122 = new cjs.Shape();
        this.shape_122.graphics.f("#231916").s().p("AgrBdIAAgxIgCAEIAGgxQAEgPABgUIAIg2IAAgBIAAgBIBIAAIgQC5g");
        this.shape_122.setTransform(-104.6,-147.7);

        this.shape_123 = new cjs.Shape();
        this.shape_123.graphics.f("#231916").s().p("AgsCKIAAgxIgCAEIAGgyQAEgPABgUIAIg1IAAgBIAAgBQACgJgIgKQgFgGgHgDIAjg+QAiAKAPAfQAJAUgCARIgRDFg");
        this.shape_123.setTransform(-104.5,-152.2);

        this.shape_124 = new cjs.Shape();
        this.shape_124.graphics.f("#231916").s().p("AgNCMIAAgwIgBADIAFgyQAFgPAAgTIAHg2IAAAAIABgCQABgIgGgKQgGgHgHgCQgFgDgGAAQgLAAgIAJIghg1QAegXAtADQAMABALAEQAiAKAQAfQAJATgDASIgRDEg");
        this.shape_124.setTransform(-107.6,-152.4);

        this.shape_125 = new cjs.Shape();
        this.shape_125.graphics.f("#231916").s().p("AgeBKIADACQALAEALgLQAFgEAEgIIACgDIADgJQAFgPAAgTIAIg2IAAAAIABgCQABgIgHgKQgGgHgHgCQgEgDgGAAQgLAAgIAJQgFAFgDAKQgUgDgrgMQAGgTAQgTQAIgJAIgGQAegXAsADQANABALAEQAiAKAQAfQAJATgDASIgRDEIhKAAIAAgwIgBADQgKAUgSAOQgOAKgOACg");
        this.shape_125.setTransform(-109.5,-152.4);

        this.shape_126 = new cjs.Shape();
        this.shape_126.graphics.f("#231916").s().p("Ag3CMQgVgFgQgUQgOgRgBgeIAAgFIBSgZQgGAPAFANQABAEAGAEIADACQALAEAKgLQAFgEAFgIIACgDIADgJQAFgPAAgTIAIg2IAAAAIABgCQABgIgHgKQgGgHgHgCQgFgDgGAAQgKAAgIAJQgFAFgDAKQgUgDgrgMQAGgTAQgTQAIgJAIgGQAegXAsADQANABALAEQAiAKAQAfQAJATgDASIgRDEIhKAAIAAgwIgBADQgLAUgRAOQgOAKgOACIgEAAIgKgBg");
        this.shape_126.setTransform(-110.6,-152.4);

        this.shape_127 = new cjs.Shape();
        this.shape_127.graphics.f("#231916").s().p("Ag3CMQgVgFgQgUQgOgRgBgeIAAgFQAAgsAWgUQATgXAigJIAZAxQgJAGgGAKIgDAGQgGAPAFANQABAEAGAEIADACQALAEAKgLQAFgEAFgIIACgDIADgJQAFgPAAgTIAIg2IAAAAIABgCQABgIgHgKQgGgHgHgCQgFgDgGAAQgKAAgIAJQgFAFgDAKQgUgDgrgMQAGgTAQgTQAIgJAIgGQAegXAsADQANABALAEQAiAKAQAfQAJATgDASIgRDEIhKAAIAAgwIgBADQgLAUgRAOQgOAKgOACIgEAAIgKgBg");
        this.shape_127.setTransform(-110.6,-152.4);

        this.shape_128 = new cjs.Shape();
        this.shape_128.graphics.f("#231916").s().p("Ag3CMQgVgFgQgUQgOgRgBgeIAAgFQAAgsAWgUQATgXAigJIAUgEIAegCQANAAACgEIAAAAIABgCQABgIgHgKQgGgHgHgCQgFgDgGAAQgKAAgIAJQgFAFgDAKQgUgDgrgMQAGgTAQgTQAIgJAIgGQAegXAsADQANABALAEQAiAKAQAfQAJATgDASIgRDEIhKAAIAAgwIgBADQgLAUgRAOQgOAKgOACIgEAAIgKgBgAgHAQQgJAGgGAKIgDAGQgGAPAFANQABAEAGAEIADACQALAEAKgLQAFgEAFgIIACgDIADgJQAFgPAAgTIAAgDQgUAAgMAIg");
        this.shape_128.setTransform(-110.6,-152.4);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_120}]},6).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[]},46).wait(1));

        // M
        this.instance = new lib.补间1("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(-14.4,-162.3);

        this.instance_1 = new lib.补间2("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-174.4,-162.8);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-174.4,y:-162.8},6).wait(55));
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},6).to({x:-164.4},2).to({_off:true},52).wait(1));

        // line
        this.shape_129 = new cjs.Shape();
        this.shape_129.graphics.f("#E60013").s().p("AgTAOIAAgbIAnAAIAAAbg");
        this.shape_129.setTransform(-123,-133.8);

        this.shape_130 = new cjs.Shape();
        this.shape_130.graphics.f("#E60013").s().p("AhZAOIAAgbICyAAIAAAbg");
        this.shape_130.setTransform(-116,-133.8);

        this.shape_131 = new cjs.Shape();
        this.shape_131.graphics.f("#E60013").s().p("AieAOIAAgbIE9AAIAAAbg");
        this.shape_131.setTransform(-109.1,-133.8);

        this.shape_132 = new cjs.Shape();
        this.shape_132.graphics.f("#E60013").s().p("AjkAOIAAgbIHJAAIAAAbg");
        this.shape_132.setTransform(-102.1,-133.8);

        this.shape_133 = new cjs.Shape();
        this.shape_133.graphics.f("#E60013").s().p("AkpAOIAAgbIJTAAIAAAbg");
        this.shape_133.setTransform(-95.2,-133.8);

        this.shape_134 = new cjs.Shape();
        this.shape_134.graphics.f("#E60013").s().p("AlvAOIAAgbILfAAIAAAbg");
        this.shape_134.setTransform(-88.2,-133.8);

        this.shape_135 = new cjs.Shape();
        this.shape_135.graphics.f("#E60013").s().p("Am1AOIAAgbINqAAIAAAbg");
        this.shape_135.setTransform(-81.2,-133.8);

        this.shape_136 = new cjs.Shape();
        this.shape_136.graphics.f("#E60013").s().p("An6AOIAAgbIP1AAIAAAbg");
        this.shape_136.setTransform(-74.3,-133.8);

        this.shape_137 = new cjs.Shape();
        this.shape_137.graphics.f("#E60013").s().p("ApAAOIAAgbISBAAIAAAbg");
        this.shape_137.setTransform(-67.3,-133.8);

        this.shape_138 = new cjs.Shape();
        this.shape_138.graphics.f("#E60013").s().p("AqFAOIAAgbIULAAIAAAbg");
        this.shape_138.setTransform(-60.4,-133.8);

        this.shape_139 = new cjs.Shape();
        this.shape_139.graphics.f("#E60013").s().p("ArLAOIAAgbIWXAAIAAAbg");
        this.shape_139.setTransform(-53.4,-133.8);

        this.shape_140 = new cjs.Shape();
        this.shape_140.graphics.f("#E60013").s().p("AsRAOIAAgbIYjAAIAAAbg");
        this.shape_140.setTransform(-46.4,-133.8);

        this.shape_141 = new cjs.Shape();
        this.shape_141.graphics.f("#E60013").s().p("AtWAOIAAgbIatAAIAAAbg");
        this.shape_141.setTransform(-39.5,-133.8);

        this.shape_142 = new cjs.Shape();
        this.shape_142.graphics.f("#E60013").s().p("AucAOIAAgbIc5AAIAAAbg");
        this.shape_142.setTransform(-32.5,-133.8);

        this.shape_143 = new cjs.Shape();
        this.shape_143.graphics.f("#E60013").s().p("AvhAOIAAgbIfDAAIAAAbg");
        this.shape_143.setTransform(-25.6,-133.8);

        this.shape_144 = new cjs.Shape();
        this.shape_144.graphics.f("#E60013").s().p("AwnAOIAAgbMAhPAAAIAAAbg");
        this.shape_144.setTransform(-18.6,-133.8);

        this.shape_145 = new cjs.Shape();
        this.shape_145.graphics.f("#E60013").s().p("AxsAOIAAgbMAjZAAAIAAAbg");
        this.shape_145.setTransform(-11.7,-133.8);

        this.shape_146 = new cjs.Shape();
        this.shape_146.graphics.f("#E60013").s().p("AyyAOIAAgbMAllAAAIAAAbg");
        this.shape_146.setTransform(-4.7,-133.8);

        this.shape_147 = new cjs.Shape();
        this.shape_147.graphics.f("#E60013").s().p("Az4AOIAAgbMAnxAAAIAAAbg");
        this.shape_147.setTransform(2.3,-133.8);

        this.shape_148 = new cjs.Shape();
        this.shape_148.graphics.f("#E60013").s().p("A09AOIAAgbMAp7AAAIAAAbg");
        this.shape_148.setTransform(9.2,-133.8);

        this.shape_149 = new cjs.Shape();
        this.shape_149.graphics.f("#E60013").s().p("A2DAOIAAgbMAsHAAAIAAAbg");
        this.shape_149.setTransform(16.2,-133.8);

        this.shape_150 = new cjs.Shape();
        this.shape_150.graphics.f("#E60013").s().p("A3IAOIAAgbMAuRAAAIAAAbg");
        this.shape_150.setTransform(23.1,-133.8);

        this.shape_151 = new cjs.Shape();
        this.shape_151.graphics.f("#E60013").s().p("A4OAOIAAgbMAwdAAAIAAAbg");
        this.shape_151.setTransform(30.1,-133.8);

        this.shape_152 = new cjs.Shape();
        this.shape_152.graphics.f("#E60013").s().p("A5UAOIAAgbMAyoAAAIAAAbg");
        this.shape_152.setTransform(37.1,-133.8);

        this.shape_153 = new cjs.Shape();
        this.shape_153.graphics.f("#E60013").s().p("A6ZAOIAAgbMA0zAAAIAAAbg");
        this.shape_153.setTransform(44,-133.8);

        this.shape_154 = new cjs.Shape();
        this.shape_154.graphics.f("#E60013").s().p("A6IAOIAAgbMA0RAAAIAAAbg");
        this.shape_154.setTransform(42.3,-133.8);

        this.shape_155 = new cjs.Shape();
        this.shape_155.graphics.f("#E60013").s().p("A53AOIAAgbMAzuAAAIAAAbg");
        this.shape_155.setTransform(40.6,-133.8);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_129}]},16).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[]},18).wait(1));

        // Layer 21
        this.instance_2 = new lib.元件2();
        this.instance_2.parent = this;
        this.instance_2.setTransform(0.6,-110.9,1,1,0,0,0,205.6,11);
        this.instance_2.alpha = 0;
        this.instance_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({_off:false},0).to({alpha:1},33).to({_off:true},11).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-53.9,-192.6,79.1,60.7);


// stage content:
    (lib._420100 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.Symbol1("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(252.1,223.5,1,1,0,0,0,43,26.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(365.1,54.4,79.1,60.7);
// library properties:
    lib.properties = {
        width: 420,
        height: 100,
        fps: 24,
        color: "#FFFFFF",
        opacity: 1.00,
        manifest: [],
        preloads: []
    };




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
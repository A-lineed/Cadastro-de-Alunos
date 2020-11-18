// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/crud_node$1.0.0/templates/form.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=en><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>Cadastro</title><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css><link href=https://fonts.googleapis.com/icon?family=Material+Icons rel=stylesheet><link href=https://fonts.googleapis.com/css2?family=Modak&display=swap rel=stylesheet></head><body><div class=container><link rel=preconnect href=https://fonts.gstatic.com><div class=card-panel><span class=\"blue-text text-darken-2\">CADASTRO</span></div><br><form action=/alunos method=post><input cclass=\"alert alert-secondary\" type=hidden name=id" +
    marko_attr("value", data.id) +
    "><input class=\"alert alert-secondary\" type=text name=nome placeholder=nome" +
    marko_attr("value", data.nome) +
    "><input class=\"alert alert-secondary\" type=email name=email placeholder=email" +
    marko_attr("value", data.email) +
    "><label>Cursos</label><p><label><input name=curso type=radio value=ads" +
    marko_attr("checked", data.curso == "ads") +
    "><span>Análise e desenvolvimento de sistemas</span></label></p><p><label><input name=curso type=radio value=ipi" +
    marko_attr("checked", data.curso == "ipi") +
    "><span>Infomática para internet</span></label></p><p><label><input name=curso type=radio value=qualidade" +
    marko_attr("checked", data.curso == "qualidade") +
    "><span>Gestão da qualidade</span></label></p><a href=/  style=\"margin-right: 10pt\" class=\"waves-effect waves-light btn cyan accent-2\">Cancelar</a><button class=\"btn waves-effect waves-light cyan accent-3\" type=submit>Salvar</button></form></div><script src=https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "33");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/crud_node$1.0.0/templates/form.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };

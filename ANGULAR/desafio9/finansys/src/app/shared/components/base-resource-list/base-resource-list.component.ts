import { OnInit, Directive } from '@angular/core';

import { BaseResourceModel } from "../../models/base-resource.model";
import { BaseResourceService } from "../../services/base-resource.service";

@Directive()
export abstract class BaseResourceListComponent<T extends BaseResourceModel> implements OnInit {

  resources: T[] = [];
  public novoId: any = '1/new';

  constructor(private resourceService: BaseResourceService<T>) { }

  ngOnInit() {
    this.resourceService.getAll().subscribe(
      resources => {
        this.resources = resources.sort((a, b) => b.id - a.id);
        console.log(resources)
        this.getId();
      },
      error => alert('Erro ao carregar a lista')
    );
  }

  deleteResource(resource: T) {
    const mustDelete = confirm('Deseja realmente excluir este item?');

    if (mustDelete) {
      this.resourceService.delete(resource.id).subscribe(
        () => this.resources = this.resources.filter(element => element != resource),
        () => alert("Erro ao tentar excluir!")
      )
    }
  }

  private getId() {
    if (this.resources.length == 0) return;

    let idList = this.resources.map(a => Number(a.id));
      this.novoId = Math.max(...idList) + 1 + '/new'
  }
}
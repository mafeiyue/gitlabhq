import mountComponent from 'spec/helpers/vue_mount_component_helper';
        props.diffFile.blob.icon = 'dummy icon';
        vm = mountComponent(Component, props);
        vm = mountComponent(Component, props);
        vm = mountComponent(Component, props);
        vm = mountComponent(Component, props);
        vm = mountComponent(Component, props);
        vm = mountComponent(Component, props);
        vm = mountComponent(Component, props);
        vm = mountComponent(Component, props);
        vm = mountComponent(Component, props);
        vm = mountComponent(Component, props);
        vm = mountComponent(Component, props);
        vm = mountComponent(Component, props);
        vm = mountComponent(Component, props);
        vm = mountComponent(Component, props);
    describe('isDiscussionsExpanded', () => {
      beforeEach(() => {
        Object.assign(props, {
          discussionsExpanded: true,
          expanded: true,
        });
      });

      it('returns true if diff and discussion are expanded', () => {
        vm = mountComponent(Component, props);

        expect(vm.isDiscussionsExpanded).toBe(true);
      });

      it('returns false if discussion is collapsed', () => {
        props.discussionsExpanded = false;

        vm = mountComponent(Component, props);

        expect(vm.isDiscussionsExpanded).toBe(false);
      });

      it('returns false if diff is collapsed', () => {
        props.expanded = false;

        vm = mountComponent(Component, props);

        expect(vm.isDiscussionsExpanded).toBe(false);
      });
    });

        vm = mountComponent(Component, props);
        vm = mountComponent(Component, props);
    describe('handleToggle', () => {
        vm.handleToggle(null, false);
        vm.handleToggle({ target: vm.$refs.header }, true);
        vm.handleToggle({ target: 'not header' }, true);
        vm = mountComponent(Component, props);
        vm = mountComponent(Component, props);
      vm = mountComponent(Component, props);
        vm = mountComponent(Component, props);
        vm = mountComponent(Component, props);
        vm = mountComponent(Component, props);
      vm = mountComponent(Component, props);
        vm = mountComponent(Component, props);
        vm = mountComponent(Component, props);
        vm = mountComponent(Component, props);
        vm = mountComponent(Component, props);
        vm = mountComponent(Component, props);
        vm = mountComponent(Component, props);
        vm = mountComponent(Component, props);
          vm = mountComponent(Component, props);
          vm = mountComponent(Component, props);